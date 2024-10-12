# EventsSessionInfo

Session info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the session | [optional] 

## Example

```python
from openapi_client.models.events_session_info import EventsSessionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsSessionInfo from a JSON string
events_session_info_instance = EventsSessionInfo.from_json(json)
# print the JSON string representation of the object
print(EventsSessionInfo.to_json())

# convert the object into a dict
events_session_info_dict = events_session_info_instance.to_dict()
# create an instance of EventsSessionInfo from a dict
events_session_info_from_dict = EventsSessionInfo.from_dict(events_session_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


