# JobExecutionInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | This property is set only if the Job is in the completed state. | [optional] 
**pool_id** | **str** | This element contains the actual Pool where the Job is assigned. When you get Job details from the service, they also contain a poolInfo element, which contains the Pool configuration data from when the Job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the Job ran on an auto Pool, and this property contains the ID of that auto Pool. | [optional] 
**scheduling_error** | [**JobSchedulingError**](JobSchedulingError.md) |  | [optional] 
**start_time** | **datetime** | This is the time at which the Job was created. | 
**terminate_reason** | **str** | This property is set only if the Job is in the completed state. If the Batch service terminates the Job, it sets the reason as follows: JMComplete - the Job Manager Task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the Job reached its maxWallClockTime constraint. TerminateJobSchedule - the Job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the Job&#39;s onAllTasksComplete attribute is set to terminatejob, and all Tasks in the Job are complete. TaskFailed - the Job&#39;s onTaskFailure attribute is set to performExitOptionsJobAction, and a Task in the Job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the &#39;Terminate a Job&#39; operation. | [optional] 

## Example

```python
from openapi_client.models.job_execution_information import JobExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionInformation from a JSON string
job_execution_information_instance = JobExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(JobExecutionInformation.to_json())

# convert the object into a dict
job_execution_information_dict = job_execution_information_instance.to_dict()
# create an instance of JobExecutionInformation from a dict
job_execution_information_from_dict = JobExecutionInformation.from_dict(job_execution_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


