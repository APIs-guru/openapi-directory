# WorkspaceListUsagesResult

The list workspace usages operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[UsageMetric]**](UsageMetric.md) | Gets or sets a list of usage metrics for a workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_list_usages_result import WorkspaceListUsagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceListUsagesResult from a JSON string
workspace_list_usages_result_instance = WorkspaceListUsagesResult.from_json(json)
# print the JSON string representation of the object
print(WorkspaceListUsagesResult.to_json())

# convert the object into a dict
workspace_list_usages_result_dict = workspace_list_usages_result_instance.to_dict()
# create an instance of WorkspaceListUsagesResult from a dict
workspace_list_usages_result_from_dict = WorkspaceListUsagesResult.from_dict(workspace_list_usages_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


