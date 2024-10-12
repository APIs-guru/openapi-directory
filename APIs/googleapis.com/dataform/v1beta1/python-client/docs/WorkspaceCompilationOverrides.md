# WorkspaceCompilationOverrides

Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_database** | **str** | Optional. The default database (Google Cloud project ID). | [optional] 
**schema_suffix** | **str** | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. | [optional] 
**table_prefix** | **str** | Optional. The prefix that should be prepended to all table names. | [optional] 

## Example

```python
from openapi_client.models.workspace_compilation_overrides import WorkspaceCompilationOverrides

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCompilationOverrides from a JSON string
workspace_compilation_overrides_instance = WorkspaceCompilationOverrides.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCompilationOverrides.to_json())

# convert the object into a dict
workspace_compilation_overrides_dict = workspace_compilation_overrides_instance.to_dict()
# create an instance of WorkspaceCompilationOverrides from a dict
workspace_compilation_overrides_from_dict = WorkspaceCompilationOverrides.from_dict(workspace_compilation_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


