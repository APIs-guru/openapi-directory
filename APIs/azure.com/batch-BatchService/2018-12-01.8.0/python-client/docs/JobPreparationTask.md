# JobPreparationTask

You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of &#39;jobpreparation&#39;. No other task in the job can have the same ID as the Job Preparation task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). | [optional] 
**rerun_on_node_reboot_after_success** | **bool** | The Job Preparation task is always rerun if a compute node is reimaged, or if the Job Preparation task did not complete (e.g. because the reboot occurred while the task was running). Therefore, you should always write a Job Preparation task to be idempotent and to behave correctly if run multiple times. The default value is true. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the task&#39;s working directory.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 
**wait_for_success** | **bool** | If true and the Job Preparation task fails on a compute node, the Batch service retries the Job Preparation task up to its maximum retry count (as specified in the constraints element). If the task has still not completed successfully after all retries, then the Batch service will not schedule tasks of the job to the compute node. The compute node remains active and eligible to run tasks of other jobs. If false, the Batch service will not wait for the Job Preparation task to complete. In this case, other tasks of the job can start executing on the compute node while the Job Preparation task is still running; and even if the Job Preparation task fails, new tasks will continue to be scheduled on the node. The default value is true. | [optional] 

## Example

```python
from openapi_client.models.job_preparation_task import JobPreparationTask

# TODO update the JSON string below
json = "{}"
# create an instance of JobPreparationTask from a JSON string
job_preparation_task_instance = JobPreparationTask.from_json(json)
# print the JSON string representation of the object
print(JobPreparationTask.to_json())

# convert the object into a dict
job_preparation_task_dict = job_preparation_task_instance.to_dict()
# create an instance of JobPreparationTask from a dict
job_preparation_task_from_dict = JobPreparationTask.from_dict(job_preparation_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


