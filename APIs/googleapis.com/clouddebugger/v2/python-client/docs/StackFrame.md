# StackFrame

Represents a stack frame context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**List[Variable]**](Variable.md) | Set of arguments passed to this function. Note that this might not be populated for all stack frames. | [optional] 
**function** | **str** | Demangled function name at the call site. | [optional] 
**locals** | [**List[Variable]**](Variable.md) | Set of local variables at the stack frame location. Note that this might not be populated for all stack frames. | [optional] 
**location** | [**SourceLocation**](SourceLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.stack_frame import StackFrame

# TODO update the JSON string below
json = "{}"
# create an instance of StackFrame from a JSON string
stack_frame_instance = StackFrame.from_json(json)
# print the JSON string representation of the object
print(StackFrame.to_json())

# convert the object into a dict
stack_frame_dict = stack_frame_instance.to_dict()
# create an instance of StackFrame from a dict
stack_frame_from_dict = StackFrame.from_dict(stack_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


