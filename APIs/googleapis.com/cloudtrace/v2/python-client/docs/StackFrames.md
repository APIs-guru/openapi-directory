# StackFrames

A collection of stack frames, which can be truncated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropped_frames_count** | **int** | The number of stack frames that were dropped because there were too many stack frames. If this value is 0, then no stack frames were dropped. | [optional] 
**frame** | [**List[StackFrame]**](StackFrame.md) | Stack frames in this call stack. | [optional] 

## Example

```python
from openapi_client.models.stack_frames import StackFrames

# TODO update the JSON string below
json = "{}"
# create an instance of StackFrames from a JSON string
stack_frames_instance = StackFrames.from_json(json)
# print the JSON string representation of the object
print(StackFrames.to_json())

# convert the object into a dict
stack_frames_dict = stack_frames_instance.to_dict()
# create an instance of StackFrames from a dict
stack_frames_from_dict = StackFrames.from_dict(stack_frames_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


