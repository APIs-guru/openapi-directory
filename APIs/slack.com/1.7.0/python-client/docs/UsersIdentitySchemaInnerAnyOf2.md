# UsersIdentitySchemaInnerAnyOf2

Schema for 'identity.basic,identity.avatar' scopes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**UsersIdentitySchemaInnerAnyOfTeam**](UsersIdentitySchemaInnerAnyOfTeam.md) |  | 
**user** | [**UsersIdentitySchemaInnerAnyOf2User**](UsersIdentitySchemaInnerAnyOf2User.md) |  | 

## Example

```python
from openapi_client.models.users_identity_schema_inner_any_of2 import UsersIdentitySchemaInnerAnyOf2

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdentitySchemaInnerAnyOf2 from a JSON string
users_identity_schema_inner_any_of2_instance = UsersIdentitySchemaInnerAnyOf2.from_json(json)
# print the JSON string representation of the object
print(UsersIdentitySchemaInnerAnyOf2.to_json())

# convert the object into a dict
users_identity_schema_inner_any_of2_dict = users_identity_schema_inner_any_of2_instance.to_dict()
# create an instance of UsersIdentitySchemaInnerAnyOf2 from a dict
users_identity_schema_inner_any_of2_from_dict = UsersIdentitySchemaInnerAnyOf2.from_dict(users_identity_schema_inner_any_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


