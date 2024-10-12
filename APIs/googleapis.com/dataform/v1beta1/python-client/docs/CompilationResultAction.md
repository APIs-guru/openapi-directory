# CompilationResultAction

Represents a single Dataform action in a compilation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assertion** | [**Assertion**](Assertion.md) |  | [optional] 
**canonical_target** | [**Target**](Target.md) |  | [optional] 
**declaration** | [**Declaration**](Declaration.md) |  | [optional] 
**file_path** | **str** | The full path including filename in which this action is located, relative to the workspace root. | [optional] 
**operations** | [**Operations**](Operations.md) |  | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**target** | [**Target**](Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.compilation_result_action import CompilationResultAction

# TODO update the JSON string below
json = "{}"
# create an instance of CompilationResultAction from a JSON string
compilation_result_action_instance = CompilationResultAction.from_json(json)
# print the JSON string representation of the object
print(CompilationResultAction.to_json())

# convert the object into a dict
compilation_result_action_dict = compilation_result_action_instance.to_dict()
# create an instance of CompilationResultAction from a dict
compilation_result_action_from_dict = CompilationResultAction.from_dict(compilation_result_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


