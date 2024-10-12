# AuthRevokeSchema

Schema for successful response from auth.revoke method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**revoked** | **bool** |  | 

## Example

```python
from openapi_client.models.auth_revoke_schema import AuthRevokeSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AuthRevokeSchema from a JSON string
auth_revoke_schema_instance = AuthRevokeSchema.from_json(json)
# print the JSON string representation of the object
print(AuthRevokeSchema.to_json())

# convert the object into a dict
auth_revoke_schema_dict = auth_revoke_schema_instance.to_dict()
# create an instance of AuthRevokeSchema from a dict
auth_revoke_schema_from_dict = AuthRevokeSchema.from_dict(auth_revoke_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


