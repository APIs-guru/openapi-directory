# UsersIdentitySchemaInnerAnyOf1

Schema for 'identity.basic,identity.email' scopes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**UsersIdentitySchemaInnerAnyOfTeam**](UsersIdentitySchemaInnerAnyOfTeam.md) |  | 
**user** | [**UsersIdentitySchemaInnerAnyOf1User**](UsersIdentitySchemaInnerAnyOf1User.md) |  | 

## Example

```python
from openapi_client.models.users_identity_schema_inner_any_of1 import UsersIdentitySchemaInnerAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdentitySchemaInnerAnyOf1 from a JSON string
users_identity_schema_inner_any_of1_instance = UsersIdentitySchemaInnerAnyOf1.from_json(json)
# print the JSON string representation of the object
print(UsersIdentitySchemaInnerAnyOf1.to_json())

# convert the object into a dict
users_identity_schema_inner_any_of1_dict = users_identity_schema_inner_any_of1_instance.to_dict()
# create an instance of UsersIdentitySchemaInnerAnyOf1 from a dict
users_identity_schema_inner_any_of1_from_dict = UsersIdentitySchemaInnerAnyOf1.from_dict(users_identity_schema_inner_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


