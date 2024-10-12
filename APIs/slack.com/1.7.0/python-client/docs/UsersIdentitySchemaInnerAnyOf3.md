# UsersIdentitySchemaInnerAnyOf3

Schema for 'identity.basic,identity.team' scopes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**UsersIdentitySchemaInnerAnyOf3Team**](UsersIdentitySchemaInnerAnyOf3Team.md) |  | 
**user** | [**RtmConnectSchemaSelf**](RtmConnectSchemaSelf.md) |  | 

## Example

```python
from openapi_client.models.users_identity_schema_inner_any_of3 import UsersIdentitySchemaInnerAnyOf3

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdentitySchemaInnerAnyOf3 from a JSON string
users_identity_schema_inner_any_of3_instance = UsersIdentitySchemaInnerAnyOf3.from_json(json)
# print the JSON string representation of the object
print(UsersIdentitySchemaInnerAnyOf3.to_json())

# convert the object into a dict
users_identity_schema_inner_any_of3_dict = users_identity_schema_inner_any_of3_instance.to_dict()
# create an instance of UsersIdentitySchemaInnerAnyOf3 from a dict
users_identity_schema_inner_any_of3_from_dict = UsersIdentitySchemaInnerAnyOf3.from_dict(users_identity_schema_inner_any_of3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


