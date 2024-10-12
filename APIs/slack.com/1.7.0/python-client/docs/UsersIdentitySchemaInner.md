# UsersIdentitySchemaInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**UsersIdentitySchemaInnerAnyOf3Team**](UsersIdentitySchemaInnerAnyOf3Team.md) |  | 
**user** | [**RtmConnectSchemaSelf**](RtmConnectSchemaSelf.md) |  | 

## Example

```python
from openapi_client.models.users_identity_schema_inner import UsersIdentitySchemaInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdentitySchemaInner from a JSON string
users_identity_schema_inner_instance = UsersIdentitySchemaInner.from_json(json)
# print the JSON string representation of the object
print(UsersIdentitySchemaInner.to_json())

# convert the object into a dict
users_identity_schema_inner_dict = users_identity_schema_inner_instance.to_dict()
# create an instance of UsersIdentitySchemaInner from a dict
users_identity_schema_inner_from_dict = UsersIdentitySchemaInner.from_dict(users_identity_schema_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


