# StartTask

Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the start Task may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid start Tasks which create breakaway process or install/launch services from the start Task working directory, as this will block Batch from being able to re-run the start Task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**max_task_retry_count** | **int** | The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the Task&#39;s working directory. | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 
**wait_for_success** | **bool** | If true and the start Task fails on a Node, the Batch service retries the start Task up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the start Task to complete. In this case, other Tasks can start executing on the Compute Node while the start Task is still running; and even if the start Task fails, new Tasks will continue to be scheduled on the Compute Node. The default is false. | [optional] 

## Example

```python
from openapi_client.models.start_task import StartTask

# TODO update the JSON string below
json = "{}"
# create an instance of StartTask from a JSON string
start_task_instance = StartTask.from_json(json)
# print the JSON string representation of the object
print(StartTask.to_json())

# convert the object into a dict
start_task_dict = start_task_instance.to_dict()
# create an instance of StartTask from a dict
start_task_from_dict = StartTask.from_dict(start_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


