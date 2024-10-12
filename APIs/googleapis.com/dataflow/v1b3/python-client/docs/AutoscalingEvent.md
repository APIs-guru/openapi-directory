# AutoscalingEvent

A structured message reporting an autoscaling decision made by the Dataflow service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_num_workers** | **str** | The current number of workers the job has. | [optional] 
**description** | [**StructuredMessage**](StructuredMessage.md) |  | [optional] 
**event_type** | **str** | The type of autoscaling event to report. | [optional] 
**target_num_workers** | **str** | The target number of workers the worker pool wants to resize to use. | [optional] 
**time** | **str** | The time this event was emitted to indicate a new target or current num_workers value. | [optional] 
**worker_pool** | **str** | A short and friendly name for the worker pool this event refers to. | [optional] 

## Example

```python
from openapi_client.models.autoscaling_event import AutoscalingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscalingEvent from a JSON string
autoscaling_event_instance = AutoscalingEvent.from_json(json)
# print the JSON string representation of the object
print(AutoscalingEvent.to_json())

# convert the object into a dict
autoscaling_event_dict = autoscaling_event_instance.to_dict()
# create an instance of AutoscalingEvent from a dict
autoscaling_event_from_dict = AutoscalingEvent.from_dict(autoscaling_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


