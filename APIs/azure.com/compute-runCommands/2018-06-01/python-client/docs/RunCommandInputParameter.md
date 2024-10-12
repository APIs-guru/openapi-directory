# RunCommandInputParameter

Describes the properties of a run command parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The run command parameter name. | 
**value** | **str** | The run command parameter value. | 

## Example

```python
from openapi_client.models.run_command_input_parameter import RunCommandInputParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandInputParameter from a JSON string
run_command_input_parameter_instance = RunCommandInputParameter.from_json(json)
# print the JSON string representation of the object
print(RunCommandInputParameter.to_json())

# convert the object into a dict
run_command_input_parameter_dict = run_command_input_parameter_instance.to_dict()
# create an instance of RunCommandInputParameter from a dict
run_command_input_parameter_from_dict = RunCommandInputParameter.from_dict(run_command_input_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


