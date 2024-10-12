# WorkflowTriggerRecurrence

The workflow trigger recurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time. | [optional] 
**frequency** | [**RecurrenceFrequency**](RecurrenceFrequency.md) |  | [optional] 
**interval** | **int** | The interval. | [optional] 
**schedule** | [**RecurrenceSchedule**](RecurrenceSchedule.md) |  | [optional] 
**start_time** | **str** | The start time. | [optional] 
**time_zone** | **str** | The time zone. | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_recurrence import WorkflowTriggerRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerRecurrence from a JSON string
workflow_trigger_recurrence_instance = WorkflowTriggerRecurrence.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerRecurrence.to_json())

# convert the object into a dict
workflow_trigger_recurrence_dict = workflow_trigger_recurrence_instance.to_dict()
# create an instance of WorkflowTriggerRecurrence from a dict
workflow_trigger_recurrence_from_dict = WorkflowTriggerRecurrence.from_dict(workflow_trigger_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


