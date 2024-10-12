# ExecuteScriptActionParameters

The parameters for the script actions to execute on a running cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persist_on_success** | **bool** | Gets or sets if the scripts needs to be persisted. | 
**script_actions** | [**List[RuntimeScriptAction]**](RuntimeScriptAction.md) | The list of run time script actions. | [optional] 

## Example

```python
from openapi_client.models.execute_script_action_parameters import ExecuteScriptActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteScriptActionParameters from a JSON string
execute_script_action_parameters_instance = ExecuteScriptActionParameters.from_json(json)
# print the JSON string representation of the object
print(ExecuteScriptActionParameters.to_json())

# convert the object into a dict
execute_script_action_parameters_dict = execute_script_action_parameters_instance.to_dict()
# create an instance of ExecuteScriptActionParameters from a dict
execute_script_action_parameters_from_dict = ExecuteScriptActionParameters.from_dict(execute_script_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


