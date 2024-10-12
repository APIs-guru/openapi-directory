# EventsBrowserTimingResult

A browser timing result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_timing** | [**EventsBrowserTimingInfo**](EventsBrowserTimingInfo.md) |  | [optional] 
**client_performance** | [**EventsClientPerformanceInfo**](EventsClientPerformanceInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_browser_timing_result import EventsBrowserTimingResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsBrowserTimingResult from a JSON string
events_browser_timing_result_instance = EventsBrowserTimingResult.from_json(json)
# print the JSON string representation of the object
print(EventsBrowserTimingResult.to_json())

# convert the object into a dict
events_browser_timing_result_dict = events_browser_timing_result_instance.to_dict()
# create an instance of EventsBrowserTimingResult from a dict
events_browser_timing_result_from_dict = EventsBrowserTimingResult.from_dict(events_browser_timing_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


