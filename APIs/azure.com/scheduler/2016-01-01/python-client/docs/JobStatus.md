# JobStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_count** | **int** | Gets the number of times this job has executed. | [optional] [readonly] 
**failure_count** | **int** | Gets the number of times this job has failed. | [optional] [readonly] 
**faulted_count** | **int** | Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states). | [optional] [readonly] 
**last_execution_time** | **datetime** | Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet. | [optional] [readonly] 
**next_execution_time** | **datetime** | Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_status import JobStatus

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatus from a JSON string
job_status_instance = JobStatus.from_json(json)
# print the JSON string representation of the object
print(JobStatus.to_json())

# convert the object into a dict
job_status_dict = job_status_instance.to_dict()
# create an instance of JobStatus from a dict
job_status_from_dict = JobStatus.from_dict(job_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


