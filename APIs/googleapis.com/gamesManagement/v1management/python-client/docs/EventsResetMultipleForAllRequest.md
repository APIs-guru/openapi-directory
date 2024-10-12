# EventsResetMultipleForAllRequest

Multiple events reset all request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_ids** | **List[str]** | The IDs of events to reset. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#eventsResetMultipleForAllRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.events_reset_multiple_for_all_request import EventsResetMultipleForAllRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EventsResetMultipleForAllRequest from a JSON string
events_reset_multiple_for_all_request_instance = EventsResetMultipleForAllRequest.from_json(json)
# print the JSON string representation of the object
print(EventsResetMultipleForAllRequest.to_json())

# convert the object into a dict
events_reset_multiple_for_all_request_dict = events_reset_multiple_for_all_request_instance.to_dict()
# create an instance of EventsResetMultipleForAllRequest from a dict
events_reset_multiple_for_all_request_from_dict = EventsResetMultipleForAllRequest.from_dict(events_reset_multiple_for_all_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


