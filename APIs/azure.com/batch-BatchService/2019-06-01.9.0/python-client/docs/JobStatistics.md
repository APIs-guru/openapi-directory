# JobStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kernel_cpu_time** | **str** |  | 
**last_update_time** | **datetime** |  | 
**num_failed_tasks** | **int** | A Task fails if it exhausts its maximum retry count without returning exit code 0. | 
**num_succeeded_tasks** | **int** | A Task completes successfully if it returns exit code 0. | 
**num_task_retries** | **int** |  | 
**read_iogi_b** | **float** |  | 
**read_i_ops** | **int** |  | 
**start_time** | **datetime** |  | 
**url** | **str** |  | 
**user_cpu_time** | **str** |  | 
**wait_time** | **str** | The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.) This value is only reported in the Account lifetime statistics; it is not included in the Job statistics. | 
**wall_clock_time** | **str** |  The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries. | 
**write_iogi_b** | **float** |  | 
**write_i_ops** | **int** |  | 

## Example

```python
from openapi_client.models.job_statistics import JobStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics from a JSON string
job_statistics_instance = JobStatistics.from_json(json)
# print the JSON string representation of the object
print(JobStatistics.to_json())

# convert the object into a dict
job_statistics_dict = job_statistics_instance.to_dict()
# create an instance of JobStatistics from a dict
job_statistics_from_dict = JobStatistics.from_dict(job_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


