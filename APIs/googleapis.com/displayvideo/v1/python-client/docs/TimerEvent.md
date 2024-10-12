# TimerEvent

Timer event of the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the timer event. | [optional] 
**reporting_name** | **str** | Required. The name used to identify this timer event in reports. | [optional] 

## Example

```python
from openapi_client.models.timer_event import TimerEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TimerEvent from a JSON string
timer_event_instance = TimerEvent.from_json(json)
# print the JSON string representation of the object
print(TimerEvent.to_json())

# convert the object into a dict
timer_event_dict = timer_event_instance.to_dict()
# create an instance of TimerEvent from a dict
timer_event_from_dict = TimerEvent.from_dict(timer_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


