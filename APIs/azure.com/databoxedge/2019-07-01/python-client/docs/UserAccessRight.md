# UserAccessRight

The mapping between a particular user and the access type on the SMB share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | Type of access to be allowed for the user. | 
**user_id** | **str** | User ID (already existing in the device). | 

## Example

```python
from openapi_client.models.user_access_right import UserAccessRight

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccessRight from a JSON string
user_access_right_instance = UserAccessRight.from_json(json)
# print the JSON string representation of the object
print(UserAccessRight.to_json())

# convert the object into a dict
user_access_right_dict = user_access_right_instance.to_dict()
# create an instance of UserAccessRight from a dict
user_access_right_from_dict = UserAccessRight.from_dict(user_access_right_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


