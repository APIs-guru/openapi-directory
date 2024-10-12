# CloudTask

Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_info** | [**AffinityInformation**](AffinityInformation.md) |  | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. | [optional] 
**authentication_token_settings** | [**AuthenticationTokenSettings**](AuthenticationTokenSettings.md) |  | [optional] 
**command_line** | **str** | For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | [optional] 
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**creation_time** | **datetime** |  | [optional] 
**depends_on** | [**TaskDependencies**](TaskDependencies.md) |  | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**e_tag** | **str** | This is an opaque string. You can use it to detect whether the Task has changed between requests. In particular, you can be pass the ETag when updating a Task to specify that your changes should take effect only if nobody else has modified the Task in the meantime. | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**execution_info** | [**TaskExecutionInformation**](TaskExecutionInformation.md) |  | [optional] 
**exit_conditions** | [**ExitConditions**](ExitConditions.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. | [optional] 
**last_modified** | **datetime** |  | [optional] 
**multi_instance_settings** | [**MultiInstanceSettings**](MultiInstanceSettings.md) |  | [optional] 
**node_info** | [**ComputeNodeInformation**](ComputeNodeInformation.md) |  | [optional] 
**output_files** | [**List[OutputFile]**](OutputFile.md) | For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. | [optional] 
**previous_state** | [**TaskState**](TaskState.md) |  | [optional] 
**previous_state_transition_time** | **datetime** | This property is not set if the Task is in its initial Active state. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**state** | [**TaskState**](TaskState.md) |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**stats** | [**TaskStatistics**](TaskStatistics.md) |  | [optional] 
**url** | **str** |  | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_task import CloudTask

# TODO update the JSON string below
json = "{}"
# create an instance of CloudTask from a JSON string
cloud_task_instance = CloudTask.from_json(json)
# print the JSON string representation of the object
print(CloudTask.to_json())

# convert the object into a dict
cloud_task_dict = cloud_task_instance.to_dict()
# create an instance of CloudTask from a dict
cloud_task_from_dict = CloudTask.from_dict(cloud_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


