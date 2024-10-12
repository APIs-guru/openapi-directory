# TraceProperties

Trace properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insight_instrumentation_key** | **str** | Target application insight instrumentation key | [optional] 
**enabled** | **bool** | Indicates whether enable the tracing functionality | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**state** | **str** | State of the trace proxy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trace_properties import TraceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TraceProperties from a JSON string
trace_properties_instance = TraceProperties.from_json(json)
# print the JSON string representation of the object
print(TraceProperties.to_json())

# convert the object into a dict
trace_properties_dict = trace_properties_instance.to_dict()
# create an instance of TraceProperties from a dict
trace_properties_from_dict = TraceProperties.from_dict(trace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


