# DiagnosticsException

a exception

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**List[DiagnosticsExceptionFramesInner]**](DiagnosticsExceptionFramesInner.md) | frames of the excetpion | 
**inner_exceptions** | [**List[DiagnosticsException]**](DiagnosticsException.md) |  | [optional] 
**platform** | **str** | SDK/Platform this thread is beeing generated from | [optional] 
**reason** | **str** | Reason of the exception | [optional] 
**relevant** | **bool** | relevant exception (crashed) | [optional] 
**type** | **str** | Type of the exception (NSSomethingException, NullPointerException) | [optional] 

## Example

```python
from openapi_client.models.diagnostics_exception import DiagnosticsException

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsException from a JSON string
diagnostics_exception_instance = DiagnosticsException.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsException.to_json())

# convert the object into a dict
diagnostics_exception_dict = diagnostics_exception_instance.to_dict()
# create an instance of DiagnosticsException from a dict
diagnostics_exception_from_dict = DiagnosticsException.from_dict(diagnostics_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


