# ListWorkspaceKeysResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights_instrumentation_key** | **str** |  | [optional] [readonly] 
**container_registry_credentials** | [**RegistryListCredentialsResult**](RegistryListCredentialsResult.md) |  | [optional] 
**user_storage_key** | **str** |  | [optional] [readonly] 
**user_storage_resource_id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_workspace_keys_result import ListWorkspaceKeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkspaceKeysResult from a JSON string
list_workspace_keys_result_instance = ListWorkspaceKeysResult.from_json(json)
# print the JSON string representation of the object
print(ListWorkspaceKeysResult.to_json())

# convert the object into a dict
list_workspace_keys_result_dict = list_workspace_keys_result_instance.to_dict()
# create an instance of ListWorkspaceKeysResult from a dict
list_workspace_keys_result_from_dict = ListWorkspaceKeysResult.from_dict(list_workspace_keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


