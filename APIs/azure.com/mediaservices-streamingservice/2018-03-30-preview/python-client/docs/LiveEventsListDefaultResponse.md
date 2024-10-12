# LiveEventsListDefaultResponse

The API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**LiveEventsListDefaultResponseError**](LiveEventsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_events_list_default_response import LiveEventsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventsListDefaultResponse from a JSON string
live_events_list_default_response_instance = LiveEventsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(LiveEventsListDefaultResponse.to_json())

# convert the object into a dict
live_events_list_default_response_dict = live_events_list_default_response_instance.to_dict()
# create an instance of LiveEventsListDefaultResponse from a dict
live_events_list_default_response_from_dict = LiveEventsListDefaultResponse.from_dict(live_events_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


