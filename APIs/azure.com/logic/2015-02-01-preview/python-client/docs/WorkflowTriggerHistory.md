# WorkflowTriggerHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets the workflow trigger history name. | [optional] [readonly] 
**properties** | [**WorkflowTriggerHistoryProperties**](WorkflowTriggerHistoryProperties.md) |  | [optional] 
**type** | **str** | Gets the workflow trigger history type. | [optional] [readonly] 
**id** | **str** | Gets or sets the resource id. | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_history import WorkflowTriggerHistory

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerHistory from a JSON string
workflow_trigger_history_instance = WorkflowTriggerHistory.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerHistory.to_json())

# convert the object into a dict
workflow_trigger_history_dict = workflow_trigger_history_instance.to_dict()
# create an instance of WorkflowTriggerHistory from a dict
workflow_trigger_history_from_dict = WorkflowTriggerHistory.from_dict(workflow_trigger_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


