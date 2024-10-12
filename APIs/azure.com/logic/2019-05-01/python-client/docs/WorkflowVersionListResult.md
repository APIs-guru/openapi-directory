# WorkflowVersionListResult

The list of workflow versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowVersion]**](WorkflowVersion.md) | A list of workflow versions. | [optional] 

## Example

```python
from openapi_client.models.workflow_version_list_result import WorkflowVersionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowVersionListResult from a JSON string
workflow_version_list_result_instance = WorkflowVersionListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowVersionListResult.to_json())

# convert the object into a dict
workflow_version_list_result_dict = workflow_version_list_result_instance.to_dict()
# create an instance of WorkflowVersionListResult from a dict
workflow_version_list_result_from_dict = WorkflowVersionListResult.from_dict(workflow_version_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


