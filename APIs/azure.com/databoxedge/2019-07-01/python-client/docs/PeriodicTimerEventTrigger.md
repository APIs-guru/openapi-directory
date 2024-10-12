# PeriodicTimerEventTrigger

Trigger details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**properties** | [**PeriodicTimerProperties**](PeriodicTimerProperties.md) |  | 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 
**kind** | **str** | Trigger Kind. | 

## Example

```python
from openapi_client.models.periodic_timer_event_trigger import PeriodicTimerEventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodicTimerEventTrigger from a JSON string
periodic_timer_event_trigger_instance = PeriodicTimerEventTrigger.from_json(json)
# print the JSON string representation of the object
print(PeriodicTimerEventTrigger.to_json())

# convert the object into a dict
periodic_timer_event_trigger_dict = periodic_timer_event_trigger_instance.to_dict()
# create an instance of PeriodicTimerEventTrigger from a dict
periodic_timer_event_trigger_from_dict = PeriodicTimerEventTrigger.from_dict(periodic_timer_event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


