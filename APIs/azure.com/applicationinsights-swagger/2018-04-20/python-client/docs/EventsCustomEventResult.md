# EventsCustomEventResult

A custom event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_event** | [**EventsCustomEventInfo**](EventsCustomEventInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_custom_event_result import EventsCustomEventResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCustomEventResult from a JSON string
events_custom_event_result_instance = EventsCustomEventResult.from_json(json)
# print the JSON string representation of the object
print(EventsCustomEventResult.to_json())

# convert the object into a dict
events_custom_event_result_dict = events_custom_event_result_instance.to_dict()
# create an instance of EventsCustomEventResult from a dict
events_custom_event_result_from_dict = EventsCustomEventResult.from_dict(events_custom_event_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


