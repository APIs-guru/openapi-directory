# EventsTraceResult

A trace result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trace** | [**EventsTraceInfo**](EventsTraceInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_trace_result import EventsTraceResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsTraceResult from a JSON string
events_trace_result_instance = EventsTraceResult.from_json(json)
# print the JSON string representation of the object
print(EventsTraceResult.to_json())

# convert the object into a dict
events_trace_result_dict = events_trace_result_instance.to_dict()
# create an instance of EventsTraceResult from a dict
events_trace_result_from_dict = EventsTraceResult.from_dict(events_trace_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


