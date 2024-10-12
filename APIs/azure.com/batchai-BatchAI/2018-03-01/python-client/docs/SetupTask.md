# SetupTask

Specifies a setup task which can be used to customize the compute nodes of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** |  | 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) |  | [optional] 
**run_elevated** | **bool** | Note. Non-elevated tasks are run under an account added into sudoer list and can perform sudo when required. | [optional] [default to False]
**secrets** | [**List[EnvironmentVariableWithSecretValue]**](EnvironmentVariableWithSecretValue.md) | Server will never report values of these variables back. | [optional] 
**std_out_err_path_prefix** | **str** | The prefix of a path where the Batch AI service will upload the stdout and stderr of the setup task. | 
**std_out_err_path_suffix** | **str** | Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. You can concatenate stdOutErrPathPrefix and stdOutErrPathSuffix to get the full path to the output directory. | [optional] [readonly] 

## Example

```python
from openapi_client.models.setup_task import SetupTask

# TODO update the JSON string below
json = "{}"
# create an instance of SetupTask from a JSON string
setup_task_instance = SetupTask.from_json(json)
# print the JSON string representation of the object
print(SetupTask.to_json())

# convert the object into a dict
setup_task_dict = setup_task_instance.to_dict()
# create an instance of SetupTask from a dict
setup_task_from_dict = SetupTask.from_dict(setup_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


