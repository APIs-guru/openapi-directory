# StackTraceElement

A single stack element (frame) where an error occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | [**Position**](Position.md) |  | [optional] 
**routine** | **str** | The routine where the error occurred. | [optional] 
**step** | **str** | The step the error occurred at. | [optional] 

## Example

```python
from openapi_client.models.stack_trace_element import StackTraceElement

# TODO update the JSON string below
json = "{}"
# create an instance of StackTraceElement from a JSON string
stack_trace_element_instance = StackTraceElement.from_json(json)
# print the JSON string representation of the object
print(StackTraceElement.to_json())

# convert the object into a dict
stack_trace_element_dict = stack_trace_element_instance.to_dict()
# create an instance of StackTraceElement from a dict
stack_trace_element_from_dict = StackTraceElement.from_dict(stack_trace_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


