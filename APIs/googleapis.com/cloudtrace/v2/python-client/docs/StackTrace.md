# StackTrace

A call stack appearing in a trace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stack_frames** | [**StackFrames**](StackFrames.md) |  | [optional] 
**stack_trace_hash_id** | **str** | The hash ID is used to conserve network bandwidth for duplicate stack traces within a single trace. Often multiple spans will have identical stack traces. The first occurrence of a stack trace should contain both the &#x60;stackFrame&#x60; content and a value in &#x60;stackTraceHashId&#x60;. Subsequent spans within the same request can refer to that stack trace by only setting &#x60;stackTraceHashId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.stack_trace import StackTrace

# TODO update the JSON string below
json = "{}"
# create an instance of StackTrace from a JSON string
stack_trace_instance = StackTrace.from_json(json)
# print the JSON string representation of the object
print(StackTrace.to_json())

# convert the object into a dict
stack_trace_dict = stack_trace_instance.to_dict()
# create an instance of StackTrace from a dict
stack_trace_from_dict = StackTrace.from_dict(stack_trace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


