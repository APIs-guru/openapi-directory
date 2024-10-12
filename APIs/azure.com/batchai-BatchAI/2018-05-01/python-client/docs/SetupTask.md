# SetupTask

Specifies a setup task which can be used to customize the compute nodes of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line to be executed on each cluster&#39;s node after it being allocated or rebooted. The command is executed in a bash subshell as a root. | 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | A collection of user defined environment variables to be set for setup task. | [optional] 
**secrets** | [**List[EnvironmentVariableWithSecretValue]**](EnvironmentVariableWithSecretValue.md) | A collection of user defined environment variables with secret values to be set for the setup task. Server will never report values of these variables back. | [optional] 
**std_out_err_path_prefix** | **str** | The prefix of a path where the Batch AI service will upload the stdout, stderr and execution log of the setup task. | 
**std_out_err_path_suffix** | **str** | A path segment appended by Batch AI to stdOutErrPathPrefix to form a path where stdout, stderr and execution log of the setup task will be uploaded. Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. The full path can be obtained by concatenation of stdOutErrPathPrefix and stdOutErrPathSuffix. | [optional] [readonly] 

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


