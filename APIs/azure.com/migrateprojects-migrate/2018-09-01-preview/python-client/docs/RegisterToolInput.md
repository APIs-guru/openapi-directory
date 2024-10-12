# RegisterToolInput

Class representing the register tool input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool** | **str** | Gets or sets the tool to be registered. | [optional] 

## Example

```python
from openapi_client.models.register_tool_input import RegisterToolInput

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterToolInput from a JSON string
register_tool_input_instance = RegisterToolInput.from_json(json)
# print the JSON string representation of the object
print(RegisterToolInput.to_json())

# convert the object into a dict
register_tool_input_dict = register_tool_input_instance.to_dict()
# create an instance of RegisterToolInput from a dict
register_tool_input_from_dict = RegisterToolInput.from_dict(register_tool_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


