# EventsPerformanceCounterResult

A performance counter result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**performance_counter** | [**EventsPerformanceCounterInfo**](EventsPerformanceCounterInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_performance_counter_result import EventsPerformanceCounterResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsPerformanceCounterResult from a JSON string
events_performance_counter_result_instance = EventsPerformanceCounterResult.from_json(json)
# print the JSON string representation of the object
print(EventsPerformanceCounterResult.to_json())

# convert the object into a dict
events_performance_counter_result_dict = events_performance_counter_result_instance.to_dict()
# create an instance of EventsPerformanceCounterResult from a dict
events_performance_counter_result_from_dict = EventsPerformanceCounterResult.from_dict(events_performance_counter_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


