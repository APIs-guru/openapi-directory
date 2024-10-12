# WorkflowTriggerRecurrence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | [**RecurrenceFrequency**](RecurrenceFrequency.md) |  | [optional] 
**interval** | **int** | Gets or sets the interval. | [optional] 
**start_time** | **datetime** | Gets or sets the start time. | [optional] 
**time_zone** | **str** | Gets or sets the time zone. | [optional] 

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


