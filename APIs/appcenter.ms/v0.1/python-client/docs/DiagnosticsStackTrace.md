# DiagnosticsStackTrace

a stacktrace in a processed and prettyfied way

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**DiagnosticsException**](DiagnosticsException.md) |  | [optional] 
**reason** | **str** |  | [optional] 
**threads** | [**List[DiagnosticsThread]**](DiagnosticsThread.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.diagnostics_stack_trace import DiagnosticsStackTrace

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsStackTrace from a JSON string
diagnostics_stack_trace_instance = DiagnosticsStackTrace.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsStackTrace.to_json())

# convert the object into a dict
diagnostics_stack_trace_dict = diagnostics_stack_trace_instance.to_dict()
# create an instance of DiagnosticsStackTrace from a dict
diagnostics_stack_trace_from_dict = DiagnosticsStackTrace.from_dict(diagnostics_stack_trace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


