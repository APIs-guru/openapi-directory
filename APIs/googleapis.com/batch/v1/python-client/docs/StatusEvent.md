# StatusEvent

Status event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the event. | [optional] 
**event_time** | **str** | The time this event occurred. | [optional] 
**task_execution** | [**TaskExecution**](TaskExecution.md) |  | [optional] 
**task_state** | **str** | Task State | [optional] 
**type** | **str** | Type of the event. | [optional] 

## Example

```python
from openapi_client.models.status_event import StatusEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StatusEvent from a JSON string
status_event_instance = StatusEvent.from_json(json)
# print the JSON string representation of the object
print(StatusEvent.to_json())

# convert the object into a dict
status_event_dict = status_event_instance.to_dict()
# create an instance of StatusEvent from a dict
status_event_from_dict = StatusEvent.from_dict(status_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


