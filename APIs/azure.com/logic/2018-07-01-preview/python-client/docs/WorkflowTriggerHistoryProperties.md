# WorkflowTriggerHistoryProperties

The workflow trigger history properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets the code. | [optional] [readonly] 
**correlation** | [**Correlation**](Correlation.md) |  | [optional] 
**end_time** | **datetime** | Gets the end time. | [optional] [readonly] 
**error** | **object** |  | [optional] 
**fired** | **bool** | Gets a value indicating whether trigger was fired. | [optional] [readonly] 
**inputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**outputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**run** | [**ResourceReference**](ResourceReference.md) |  | [optional] 
**start_time** | **datetime** | Gets the start time. | [optional] [readonly] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**tracking_id** | **str** | Gets the tracking id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_trigger_history_properties import WorkflowTriggerHistoryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerHistoryProperties from a JSON string
workflow_trigger_history_properties_instance = WorkflowTriggerHistoryProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerHistoryProperties.to_json())

# convert the object into a dict
workflow_trigger_history_properties_dict = workflow_trigger_history_properties_instance.to_dict()
# create an instance of WorkflowTriggerHistoryProperties from a dict
workflow_trigger_history_properties_from_dict = WorkflowTriggerHistoryProperties.from_dict(workflow_trigger_history_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


