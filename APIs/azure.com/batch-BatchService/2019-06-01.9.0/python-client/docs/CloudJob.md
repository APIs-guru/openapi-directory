# CloudJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. | [optional] 
**constraints** | [**JobConstraints**](JobConstraints.md) |  | [optional] 
**creation_time** | **datetime** |  | [optional] 
**display_name** | **str** |  | [optional] 
**e_tag** | **str** | This is an opaque string. You can use it to detect whether the Job has changed between requests. In particular, you can be pass the ETag when updating a Job to specify that your changes should take effect only if nobody else has modified the Job in the meantime. | [optional] 
**execution_info** | [**JobExecutionInformation**](JobExecutionInformation.md) |  | [optional] 
**id** | **str** | The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). | [optional] 
**job_manager_task** | [**JobManagerTask**](JobManagerTask.md) |  | [optional] 
**job_preparation_task** | [**JobPreparationTask**](JobPreparationTask.md) |  | [optional] 
**job_release_task** | [**JobReleaseTask**](JobReleaseTask.md) |  | [optional] 
**last_modified** | **datetime** | This is the last time at which the Job level data, such as the Job state or priority, changed. It does not factor in task-level changes such as adding new Tasks or Tasks changing state. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**network_configuration** | [**JobNetworkConfiguration**](JobNetworkConfiguration.md) |  | [optional] 
**on_all_tasks_complete** | [**OnAllTasksComplete**](OnAllTasksComplete.md) |  | [optional] 
**on_task_failure** | [**OnTaskFailure**](OnTaskFailure.md) |  | [optional] 
**pool_info** | [**PoolInformation**](PoolInformation.md) |  | [optional] 
**previous_state** | [**JobState**](JobState.md) |  | [optional] 
**previous_state_transition_time** | **datetime** | This property is not set if the Job is in its initial Active state. | [optional] 
**priority** | **int** | Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. | [optional] 
**state** | [**JobState**](JobState.md) |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**stats** | [**JobStatistics**](JobStatistics.md) |  | [optional] 
**url** | **str** |  | [optional] 
**uses_task_dependencies** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.cloud_job import CloudJob

# TODO update the JSON string below
json = "{}"
# create an instance of CloudJob from a JSON string
cloud_job_instance = CloudJob.from_json(json)
# print the JSON string representation of the object
print(CloudJob.to_json())

# convert the object into a dict
cloud_job_dict = cloud_job_instance.to_dict()
# create an instance of CloudJob from a dict
cloud_job_from_dict = CloudJob.from_dict(cloud_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


