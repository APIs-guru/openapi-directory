# EventsTraceInfo

The trace information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The trace message | [optional] 
**severity_level** | **int** | The trace severity level | [optional] 

## Example

```python
from openapi_client.models.events_trace_info import EventsTraceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsTraceInfo from a JSON string
events_trace_info_instance = EventsTraceInfo.from_json(json)
# print the JSON string representation of the object
print(EventsTraceInfo.to_json())

# convert the object into a dict
events_trace_info_dict = events_trace_info_instance.to_dict()
# create an instance of EventsTraceInfo from a dict
events_trace_info_from_dict = EventsTraceInfo.from_dict(events_trace_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


