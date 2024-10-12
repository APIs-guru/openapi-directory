# WorkflowTriggerHistoryFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_history_filter import WorkflowTriggerHistoryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerHistoryFilter from a JSON string
workflow_trigger_history_filter_instance = WorkflowTriggerHistoryFilter.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerHistoryFilter.to_json())

# convert the object into a dict
workflow_trigger_history_filter_dict = workflow_trigger_history_filter_instance.to_dict()
# create an instance of WorkflowTriggerHistoryFilter from a dict
workflow_trigger_history_filter_from_dict = WorkflowTriggerHistoryFilter.from_dict(workflow_trigger_history_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


