# ExecutionError

An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error message thrown by Apps Script, usually localized into the user&#39;s language. | [optional] 
**error_type** | **str** | The error type, for example &#x60;TypeError&#x60; or &#x60;ReferenceError&#x60;. If the error type is unavailable, this field is not included. | [optional] 
**script_stack_trace_elements** | [**List[ScriptStackTraceElement]**](ScriptStackTraceElement.md) | An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first. | [optional] 

## Example

```python
from openapi_client.models.execution_error import ExecutionError

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionError from a JSON string
execution_error_instance = ExecutionError.from_json(json)
# print the JSON string representation of the object
print(ExecutionError.to_json())

# convert the object into a dict
execution_error_dict = execution_error_instance.to_dict()
# create an instance of ExecutionError from a dict
execution_error_from_dict = ExecutionError.from_dict(execution_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


