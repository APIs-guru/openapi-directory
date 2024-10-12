# ApiPermissionsScopesListSuccessSchema

Schema for successful response api.permissions.scopes.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**scopes** | [**ApiPermissionsScopesListSuccessSchemaScopes**](ApiPermissionsScopesListSuccessSchemaScopes.md) |  | 

## Example

```python
from openapi_client.models.api_permissions_scopes_list_success_schema import ApiPermissionsScopesListSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPermissionsScopesListSuccessSchema from a JSON string
api_permissions_scopes_list_success_schema_instance = ApiPermissionsScopesListSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ApiPermissionsScopesListSuccessSchema.to_json())

# convert the object into a dict
api_permissions_scopes_list_success_schema_dict = api_permissions_scopes_list_success_schema_instance.to_dict()
# create an instance of ApiPermissionsScopesListSuccessSchema from a dict
api_permissions_scopes_list_success_schema_from_dict = ApiPermissionsScopesListSuccessSchema.from_dict(api_permissions_scopes_list_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


