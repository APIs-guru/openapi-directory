# RunCommandInput

Capture Virtual Machine parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_id** | **str** | The run command id. | 
**parameters** | [**List[RunCommandInputParameter]**](RunCommandInputParameter.md) | The run command parameters. | [optional] 
**script** | **List[str]** | Optional. The script to be executed.  When this value is given, the given script will override the default script of the command. | [optional] 

## Example

```python
from openapi_client.models.run_command_input import RunCommandInput

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandInput from a JSON string
run_command_input_instance = RunCommandInput.from_json(json)
# print the JSON string representation of the object
print(RunCommandInput.to_json())

# convert the object into a dict
run_command_input_dict = run_command_input_instance.to_dict()
# create an instance of RunCommandInput from a dict
run_command_input_from_dict = RunCommandInput.from_dict(run_command_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


