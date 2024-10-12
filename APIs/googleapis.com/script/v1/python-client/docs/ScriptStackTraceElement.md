# ScriptStackTraceElement

A stack trace through the script that shows where the execution failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function** | **str** | The name of the function that failed. | [optional] 
**line_number** | **int** | The line number where the script failed. | [optional] 

## Example

```python
from openapi_client.models.script_stack_trace_element import ScriptStackTraceElement

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptStackTraceElement from a JSON string
script_stack_trace_element_instance = ScriptStackTraceElement.from_json(json)
# print the JSON string representation of the object
print(ScriptStackTraceElement.to_json())

# convert the object into a dict
script_stack_trace_element_dict = script_stack_trace_element_instance.to_dict()
# create an instance of ScriptStackTraceElement from a dict
script_stack_trace_element_from_dict = ScriptStackTraceElement.from_dict(script_stack_trace_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


