# CompilationError

An error encountered when attempting to compile a Dataform project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_target** | [**Target**](Target.md) |  | [optional] 
**message** | **str** | Output only. The error&#39;s top level message. | [optional] [readonly] 
**path** | **str** | Output only. The path of the file where this error occurred, if available, relative to the project root. | [optional] [readonly] 
**stack** | **str** | Output only. The error&#39;s full stack trace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compilation_error import CompilationError

# TODO update the JSON string below
json = "{}"
# create an instance of CompilationError from a JSON string
compilation_error_instance = CompilationError.from_json(json)
# print the JSON string representation of the object
print(CompilationError.to_json())

# convert the object into a dict
compilation_error_dict = compilation_error_instance.to_dict()
# create an instance of CompilationError from a dict
compilation_error_from_dict = CompilationError.from_dict(compilation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


