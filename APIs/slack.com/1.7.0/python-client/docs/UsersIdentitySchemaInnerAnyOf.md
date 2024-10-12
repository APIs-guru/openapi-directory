# UsersIdentitySchemaInnerAnyOf

Schema for 'identity.basic' scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**UsersIdentitySchemaInnerAnyOfTeam**](UsersIdentitySchemaInnerAnyOfTeam.md) |  | 
**user** | [**RtmConnectSchemaSelf**](RtmConnectSchemaSelf.md) |  | 

## Example

```python
from openapi_client.models.users_identity_schema_inner_any_of import UsersIdentitySchemaInnerAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdentitySchemaInnerAnyOf from a JSON string
users_identity_schema_inner_any_of_instance = UsersIdentitySchemaInnerAnyOf.from_json(json)
# print the JSON string representation of the object
print(UsersIdentitySchemaInnerAnyOf.to_json())

# convert the object into a dict
users_identity_schema_inner_any_of_dict = users_identity_schema_inner_any_of_instance.to_dict()
# create an instance of UsersIdentitySchemaInnerAnyOf from a dict
users_identity_schema_inner_any_of_from_dict = UsersIdentitySchemaInnerAnyOf.from_dict(users_identity_schema_inner_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


