# TaskAddParameter

Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_info** | [**AffinityInformation**](AffinityInformation.md) |  | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails. | [optional] 
**authentication_token_settings** | [**AuthenticationTokenSettings**](AuthenticationTokenSettings.md) |  | [optional] 
**command_line** | **str** | For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**depends_on** | [**TaskDependencies**](TaskDependencies.md) |  | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**exit_conditions** | [**ExitConditions**](ExitConditions.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a job that differ only by case). | 
**multi_instance_settings** | [**MultiInstanceSettings**](MultiInstanceSettings.md) |  | [optional] 
**output_files** | [**List[OutputFile]**](OutputFile.md) | For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_add_parameter import TaskAddParameter

# TODO update the JSON string below
json = "{}"
# create an instance of TaskAddParameter from a JSON string
task_add_parameter_instance = TaskAddParameter.from_json(json)
# print the JSON string representation of the object
print(TaskAddParameter.to_json())

# convert the object into a dict
task_add_parameter_dict = task_add_parameter_instance.to_dict()
# create an instance of TaskAddParameter from a dict
task_add_parameter_from_dict = TaskAddParameter.from_dict(task_add_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


