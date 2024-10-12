# Authorization

Authorization tuple containing principal Id (of user/service principal/security group) and role definition id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription | 
**role_definition_id** | **str** | The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role. | 

## Example

```python
from openapi_client.models.authorization import Authorization

# TODO update the JSON string below
json = "{}"
# create an instance of Authorization from a JSON string
authorization_instance = Authorization.from_json(json)
# print the JSON string representation of the object
print(Authorization.to_json())

# convert the object into a dict
authorization_dict = authorization_instance.to_dict()
# create an instance of Authorization from a dict
authorization_from_dict = Authorization.from_dict(authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


