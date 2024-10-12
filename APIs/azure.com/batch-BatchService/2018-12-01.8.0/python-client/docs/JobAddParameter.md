# JobAddParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Individual tasks can override an environment setting specified here by specifying the same setting name with a different value. | [optional] 
**constraints** | [**JobConstraints**](JobConstraints.md) |  | [optional] 
**display_name** | **str** | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). | 
**job_manager_task** | [**JobManagerTask**](JobManagerTask.md) |  | [optional] 
**job_preparation_task** | [**JobPreparationTask**](JobPreparationTask.md) |  | [optional] 
**job_release_task** | [**JobReleaseTask**](JobReleaseTask.md) |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**network_configuration** | [**JobNetworkConfiguration**](JobNetworkConfiguration.md) |  | [optional] 
**on_all_tasks_complete** | [**OnAllTasksComplete**](OnAllTasksComplete.md) |  | [optional] 
**on_task_failure** | [**OnTaskFailure**](OnTaskFailure.md) |  | [optional] 
**pool_info** | [**PoolInformation**](PoolInformation.md) |  | 
**priority** | **int** | Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. | [optional] 
**uses_task_dependencies** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.job_add_parameter import JobAddParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobAddParameter from a JSON string
job_add_parameter_instance = JobAddParameter.from_json(json)
# print the JSON string representation of the object
print(JobAddParameter.to_json())

# convert the object into a dict
job_add_parameter_dict = job_add_parameter_instance.to_dict()
# create an instance of JobAddParameter from a dict
job_add_parameter_from_dict = JobAddParameter.from_dict(job_add_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


