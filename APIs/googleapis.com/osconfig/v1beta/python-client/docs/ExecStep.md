# ExecStep

A step that runs an executable for a PatchJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_exec_step_config** | [**ExecStepConfig**](ExecStepConfig.md) |  | [optional] 
**windows_exec_step_config** | [**ExecStepConfig**](ExecStepConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.exec_step import ExecStep

# TODO update the JSON string below
json = "{}"
# create an instance of ExecStep from a JSON string
exec_step_instance = ExecStep.from_json(json)
# print the JSON string representation of the object
print(ExecStep.to_json())

# convert the object into a dict
exec_step_dict = exec_step_instance.to_dict()
# create an instance of ExecStep from a dict
exec_step_from_dict = ExecStep.from_dict(exec_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


