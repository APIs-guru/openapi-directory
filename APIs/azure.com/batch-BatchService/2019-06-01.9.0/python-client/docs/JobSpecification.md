# JobSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) | Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. | [optional] 
**constraints** | [**JobConstraints**](JobConstraints.md) |  | [optional] 
**display_name** | **str** | The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**job_manager_task** | [**JobManagerTask**](JobManagerTask.md) |  | [optional] 
**job_preparation_task** | [**JobPreparationTask**](JobPreparationTask.md) |  | [optional] 
**job_release_task** | [**JobReleaseTask**](JobReleaseTask.md) |  | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**network_configuration** | [**JobNetworkConfiguration**](JobNetworkConfiguration.md) |  | [optional] 
**on_all_tasks_complete** | [**OnAllTasksComplete**](OnAllTasksComplete.md) |  | [optional] 
**on_task_failure** | [**OnTaskFailure**](OnTaskFailure.md) |  | [optional] 
**pool_info** | [**PoolInformation**](PoolInformation.md) |  | 
**priority** | **int** | Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job&#39;s priority after it has been created using by using the update Job API. | [optional] 
**uses_task_dependencies** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.job_specification import JobSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of JobSpecification from a JSON string
job_specification_instance = JobSpecification.from_json(json)
# print the JSON string representation of the object
print(JobSpecification.to_json())

# convert the object into a dict
job_specification_dict = job_specification_instance.to_dict()
# create an instance of JobSpecification from a dict
job_specification_from_dict = JobSpecification.from_dict(job_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


