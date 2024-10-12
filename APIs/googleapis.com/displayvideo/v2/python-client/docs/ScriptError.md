# ScriptError

An error message for a custom bidding script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The column number in the script where the error was thrown. | [optional] 
**error_code** | **str** | The type of error. | [optional] 
**error_message** | **str** | The detailed error message. | [optional] 
**line** | **str** | The line number in the script where the error was thrown. | [optional] 

## Example

```python
from openapi_client.models.script_error import ScriptError

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptError from a JSON string
script_error_instance = ScriptError.from_json(json)
# print the JSON string representation of the object
print(ScriptError.to_json())

# convert the object into a dict
script_error_dict = script_error_instance.to_dict()
# create an instance of ScriptError from a dict
script_error_from_dict = ScriptError.from_dict(script_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


