# TimeEvent

A time-stamped annotation or message event in the Span.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | [**Annotation**](Annotation.md) |  | [optional] 
**message_event** | [**MessageEvent**](MessageEvent.md) |  | [optional] 
**time** | **str** | The timestamp indicating the time the event occurred. | [optional] 

## Example

```python
from openapi_client.models.time_event import TimeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TimeEvent from a JSON string
time_event_instance = TimeEvent.from_json(json)
# print the JSON string representation of the object
print(TimeEvent.to_json())

# convert the object into a dict
time_event_dict = time_event_instance.to_dict()
# create an instance of TimeEvent from a dict
time_event_from_dict = TimeEvent.from_dict(time_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


