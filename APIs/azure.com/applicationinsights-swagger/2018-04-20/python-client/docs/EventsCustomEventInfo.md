# EventsCustomEventInfo

The custom event information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the custom event | [optional] 

## Example

```python
from openapi_client.models.events_custom_event_info import EventsCustomEventInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCustomEventInfo from a JSON string
events_custom_event_info_instance = EventsCustomEventInfo.from_json(json)
# print the JSON string representation of the object
print(EventsCustomEventInfo.to_json())

# convert the object into a dict
events_custom_event_info_dict = events_custom_event_info_instance.to_dict()
# create an instance of EventsCustomEventInfo from a dict
events_custom_event_info_from_dict = EventsCustomEventInfo.from_dict(events_custom_event_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


