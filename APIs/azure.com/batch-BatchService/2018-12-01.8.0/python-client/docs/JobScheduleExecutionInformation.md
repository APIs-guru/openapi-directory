# JobScheduleExecutionInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | This property is set only if the job schedule is in the completed state. | [optional] 
**next_run_time** | **datetime** | This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no job will be created at nextRunTime unless the job is enabled before then. | [optional] 
**recent_job** | [**RecentJob**](RecentJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_schedule_execution_information import JobScheduleExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleExecutionInformation from a JSON string
job_schedule_execution_information_instance = JobScheduleExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(JobScheduleExecutionInformation.to_json())

# convert the object into a dict
job_schedule_execution_information_dict = job_schedule_execution_information_instance.to_dict()
# create an instance of JobScheduleExecutionInformation from a dict
job_schedule_execution_information_from_dict = JobScheduleExecutionInformation.from_dict(job_schedule_execution_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


