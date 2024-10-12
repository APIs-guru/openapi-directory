# TimeEvents

A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropped_annotations_count** | **int** | The number of dropped annotations in all the included time events. If the value is 0, then no annotations were dropped. | [optional] 
**dropped_message_events_count** | **int** | The number of dropped message events in all the included time events. If the value is 0, then no message events were dropped. | [optional] 
**time_event** | [**List[TimeEvent]**](TimeEvent.md) | A collection of &#x60;TimeEvent&#x60;s. | [optional] 

## Example

```python
from openapi_client.models.time_events import TimeEvents

# TODO update the JSON string below
json = "{}"
# create an instance of TimeEvents from a JSON string
time_events_instance = TimeEvents.from_json(json)
# print the JSON string representation of the object
print(TimeEvents.to_json())

# convert the object into a dict
time_events_dict = time_events_instance.to_dict()
# create an instance of TimeEvents from a dict
time_events_from_dict = TimeEvents.from_dict(time_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


