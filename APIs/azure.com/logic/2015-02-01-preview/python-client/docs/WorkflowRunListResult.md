# WorkflowRunListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowRun]**](WorkflowRun.md) | Gets or sets a list of workflow runs. | [optional] 

## Example

```python
from openapi_client.models.workflow_run_list_result import WorkflowRunListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunListResult from a JSON string
workflow_run_list_result_instance = WorkflowRunListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunListResult.to_json())

# convert the object into a dict
workflow_run_list_result_dict = workflow_run_list_result_instance.to_dict()
# create an instance of WorkflowRunListResult from a dict
workflow_run_list_result_from_dict = WorkflowRunListResult.from_dict(workflow_run_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


