# RunCommandParameterDefinition

Describes the properties of a run command parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | The run command parameter default value. | [optional] 
**name** | **str** | The run command parameter name. | 
**required** | **bool** | The run command parameter required. | [optional] [default to False]
**type** | **str** | The run command parameter type. | 

## Example

```python
from openapi_client.models.run_command_parameter_definition import RunCommandParameterDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandParameterDefinition from a JSON string
run_command_parameter_definition_instance = RunCommandParameterDefinition.from_json(json)
# print the JSON string representation of the object
print(RunCommandParameterDefinition.to_json())

# convert the object into a dict
run_command_parameter_definition_dict = run_command_parameter_definition_instance.to_dict()
# create an instance of RunCommandParameterDefinition from a dict
run_command_parameter_definition_from_dict = RunCommandParameterDefinition.from_dict(run_command_parameter_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


