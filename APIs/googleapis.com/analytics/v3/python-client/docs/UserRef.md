# UserRef

JSON template for a user reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email ID of this user. | [optional] 
**id** | **str** | User ID. | [optional] 
**kind** | **str** |  | [optional] [default to 'analytics#userRef']

## Example

```python
from openapi_client.models.user_ref import UserRef

# TODO update the JSON string below
json = "{}"
# create an instance of UserRef from a JSON string
user_ref_instance = UserRef.from_json(json)
# print the JSON string representation of the object
print(UserRef.to_json())

# convert the object into a dict
user_ref_dict = user_ref_instance.to_dict()
# create an instance of UserRef from a dict
user_ref_from_dict = UserRef.from_dict(user_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


