# StackFrame

Represents a single stack frame in a stack trace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_number** | **str** | The column number where the function call appears, if available. This is important in JavaScript because of its anonymous functions. | [optional] 
**file_name** | [**TruncatableString**](TruncatableString.md) |  | [optional] 
**function_name** | [**TruncatableString**](TruncatableString.md) |  | [optional] 
**line_number** | **str** | The line number in &#x60;file_name&#x60; where the function call appears. | [optional] 
**load_module** | [**Module**](Module.md) |  | [optional] 
**original_function_name** | [**TruncatableString**](TruncatableString.md) |  | [optional] 
**source_version** | [**TruncatableString**](TruncatableString.md) |  | [optional] 

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


