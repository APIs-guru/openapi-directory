# AuthRevokeErrorSchema

Schema for error response from auth.revoke method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.auth_revoke_error_schema import AuthRevokeErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AuthRevokeErrorSchema from a JSON string
auth_revoke_error_schema_instance = AuthRevokeErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AuthRevokeErrorSchema.to_json())

# convert the object into a dict
auth_revoke_error_schema_dict = auth_revoke_error_schema_instance.to_dict()
# create an instance of AuthRevokeErrorSchema from a dict
auth_revoke_error_schema_from_dict = AuthRevokeErrorSchema.from_dict(auth_revoke_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


