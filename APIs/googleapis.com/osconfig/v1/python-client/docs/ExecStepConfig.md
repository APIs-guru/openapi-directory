# ExecStepConfig

Common configurations for an ExecStep.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_success_codes** | **List[int]** | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. | [optional] 
**gcs_object** | [**GcsObject**](GcsObject.md) |  | [optional] 
**interpreter** | **str** | The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\\(Unix\\)). | [optional] 
**local_path** | **str** | An absolute path to the executable on the VM. | [optional] 

## Example

```python
from openapi_client.models.exec_step_config import ExecStepConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExecStepConfig from a JSON string
exec_step_config_instance = ExecStepConfig.from_json(json)
# print the JSON string representation of the object
print(ExecStepConfig.to_json())

# convert the object into a dict
exec_step_config_dict = exec_step_config_instance.to_dict()
# create an instance of ExecStepConfig from a dict
exec_step_config_from_dict = ExecStepConfig.from_dict(exec_step_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


