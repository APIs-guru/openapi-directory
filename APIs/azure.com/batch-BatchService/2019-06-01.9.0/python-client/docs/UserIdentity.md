# UserIdentity

Specify either the userName or autoUser property, but not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_user** | [**AutoUserSpecification**](AutoUserSpecification.md) |  | [optional] 
**username** | **str** | The userName and autoUser properties are mutually exclusive; you must specify one but not both. | [optional] 

## Example

```python
from openapi_client.models.user_identity import UserIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentity from a JSON string
user_identity_instance = UserIdentity.from_json(json)
# print the JSON string representation of the object
print(UserIdentity.to_json())

# convert the object into a dict
user_identity_dict = user_identity_instance.to_dict()
# create an instance of UserIdentity from a dict
user_identity_from_dict = UserIdentity.from_dict(user_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


