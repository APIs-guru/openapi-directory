# WorkflowTriggerHistoryListResult

The list of workflow trigger histories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowTriggerHistory]**](WorkflowTriggerHistory.md) | A list of workflow trigger histories. | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_history_list_result import WorkflowTriggerHistoryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerHistoryListResult from a JSON string
workflow_trigger_history_list_result_instance = WorkflowTriggerHistoryListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerHistoryListResult.to_json())

# convert the object into a dict
workflow_trigger_history_list_result_dict = workflow_trigger_history_list_result_instance.to_dict()
# create an instance of WorkflowTriggerHistoryListResult from a dict
workflow_trigger_history_list_result_from_dict = WorkflowTriggerHistoryListResult.from_dict(workflow_trigger_history_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


