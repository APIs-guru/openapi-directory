# ScriptCompilationResult

The result of the compilation of a Script

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | Is the task done or not | 
**error** | [**ScriptCompilationError**](ScriptCompilationError.md) |  | [optional] 

## Example

```python
from openapi_client.models.script_compilation_result import ScriptCompilationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptCompilationResult from a JSON string
script_compilation_result_instance = ScriptCompilationResult.from_json(json)
# print the JSON string representation of the object
print(ScriptCompilationResult.to_json())

# convert the object into a dict
script_compilation_result_dict = script_compilation_result_instance.to_dict()
# create an instance of ScriptCompilationResult from a dict
script_compilation_result_from_dict = ScriptCompilationResult.from_dict(script_compilation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


