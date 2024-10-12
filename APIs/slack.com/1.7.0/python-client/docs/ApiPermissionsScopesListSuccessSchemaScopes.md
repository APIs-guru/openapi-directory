# ApiPermissionsScopesListSuccessSchemaScopes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_home** | **List[str]** |  | [optional] 
**channel** | **List[str]** |  | [optional] 
**group** | **List[str]** |  | [optional] 
**im** | **List[str]** |  | [optional] 
**mpim** | **List[str]** |  | [optional] 
**team** | **List[str]** |  | [optional] 
**user** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_permissions_scopes_list_success_schema_scopes import ApiPermissionsScopesListSuccessSchemaScopes

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPermissionsScopesListSuccessSchemaScopes from a JSON string
api_permissions_scopes_list_success_schema_scopes_instance = ApiPermissionsScopesListSuccessSchemaScopes.from_json(json)
# print the JSON string representation of the object
print(ApiPermissionsScopesListSuccessSchemaScopes.to_json())

# convert the object into a dict
api_permissions_scopes_list_success_schema_scopes_dict = api_permissions_scopes_list_success_schema_scopes_instance.to_dict()
# create an instance of ApiPermissionsScopesListSuccessSchemaScopes from a dict
api_permissions_scopes_list_success_schema_scopes_from_dict = ApiPermissionsScopesListSuccessSchemaScopes.from_dict(api_permissions_scopes_list_success_schema_scopes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


