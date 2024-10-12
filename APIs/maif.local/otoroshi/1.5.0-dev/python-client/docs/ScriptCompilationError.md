# ScriptCompilationError

The error of the compilation of a Script

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The column of the error | 
**file** | **Dict[str, str]** | The file where the error is located | 
**line** | **str** | The line of the error | 
**message** | **Dict[str, str]** | The message to display for the error | 
**raw_message** | **Dict[str, str]** | The raw message from the compiler | 

## Example

```python
from openapi_client.models.script_compilation_error import ScriptCompilationError

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptCompilationError from a JSON string
script_compilation_error_instance = ScriptCompilationError.from_json(json)
# print the JSON string representation of the object
print(ScriptCompilationError.to_json())

# convert the object into a dict
script_compilation_error_dict = script_compilation_error_instance.to_dict()
# create an instance of ScriptCompilationError from a dict
script_compilation_error_from_dict = ScriptCompilationError.from_dict(script_compilation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


