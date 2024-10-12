# WorkflowRunActionListResult

The list of workflow run actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowRunAction]**](WorkflowRunAction.md) | A list of workflow run actions. | [optional] 

## Example

```python
from openapi_client.models.workflow_run_action_list_result import WorkflowRunActionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionListResult from a JSON string
workflow_run_action_list_result_instance = WorkflowRunActionListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionListResult.to_json())

# convert the object into a dict
workflow_run_action_list_result_dict = workflow_run_action_list_result_instance.to_dict()
# create an instance of WorkflowRunActionListResult from a dict
workflow_run_action_list_result_from_dict = WorkflowRunActionListResult.from_dict(workflow_run_action_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


