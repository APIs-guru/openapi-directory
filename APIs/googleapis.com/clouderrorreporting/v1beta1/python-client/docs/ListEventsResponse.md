# ListEventsResponse

Contains a set of requested error events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_events** | [**List[ErrorEvent]**](ErrorEvent.md) | The error events which match the given request. | [optional] 
**next_page_token** | **str** | If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results. | [optional] 
**time_range_begin** | **str** | The timestamp specifies the start time to which the request was restricted. | [optional] 

## Example

```python
from openapi_client.models.list_events_response import ListEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEventsResponse from a JSON string
list_events_response_instance = ListEventsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEventsResponse.to_json())

# convert the object into a dict
list_events_response_dict = list_events_response_instance.to_dict()
# create an instance of ListEventsResponse from a dict
list_events_response_from_dict = ListEventsResponse.from_dict(list_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


