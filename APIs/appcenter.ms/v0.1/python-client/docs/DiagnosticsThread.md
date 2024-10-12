# DiagnosticsThread

a thread representation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crashed** | **bool** | True if this thread crashed | [optional] 
**exception** | [**DiagnosticsException**](DiagnosticsException.md) |  | [optional] 
**frames** | [**List[DiagnosticsExceptionFramesInner]**](DiagnosticsExceptionFramesInner.md) | frames of that thread | 
**platform** | **str** | SDK/Platform this thread is beeing generated from | [optional] 
**relevant** | **bool** | Shows if a thread is relevant or not. Is false if all frames are non relevant, otherwise true | [optional] 
**title** | **str** | name of the thread | 

## Example

```python
from openapi_client.models.diagnostics_thread import DiagnosticsThread

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsThread from a JSON string
diagnostics_thread_instance = DiagnosticsThread.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsThread.to_json())

# convert the object into a dict
diagnostics_thread_dict = diagnostics_thread_instance.to_dict()
# create an instance of DiagnosticsThread from a dict
diagnostics_thread_from_dict = DiagnosticsThread.from_dict(diagnostics_thread_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


