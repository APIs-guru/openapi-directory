# JobRecurrence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Gets or sets the maximum number of times that the job should run. | [optional] 
**end_time** | **datetime** | Gets or sets the time at which the job will complete. | [optional] 
**frequency** | **str** | Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). | [optional] 
**interval** | **int** | Gets or sets the interval between retries. | [optional] 
**schedule** | [**JobRecurrenceSchedule**](JobRecurrenceSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_recurrence import JobRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of JobRecurrence from a JSON string
job_recurrence_instance = JobRecurrence.from_json(json)
# print the JSON string representation of the object
print(JobRecurrence.to_json())

# convert the object into a dict
job_recurrence_dict = job_recurrence_instance.to_dict()
# create an instance of JobRecurrence from a dict
job_recurrence_from_dict = JobRecurrence.from_dict(job_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


