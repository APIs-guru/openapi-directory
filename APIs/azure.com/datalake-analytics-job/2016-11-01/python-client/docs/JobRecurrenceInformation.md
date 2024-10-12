# JobRecurrenceInformation

Recurrence job information for a specific recurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**au_hours_canceled** | **float** | the number of job execution hours that resulted in canceled jobs. | [optional] [readonly] 
**au_hours_failed** | **float** | the number of job execution hours that resulted in failed jobs. | [optional] [readonly] 
**au_hours_succeeded** | **float** | the number of job execution hours that resulted in successful jobs. | [optional] [readonly] 
**last_submit_time** | **datetime** | the last time a job in this recurrence was submitted. | [optional] [readonly] 
**num_jobs_canceled** | **int** | the number of jobs in this recurrence that have been canceled. | [optional] [readonly] 
**num_jobs_failed** | **int** | the number of jobs in this recurrence that have failed. | [optional] [readonly] 
**num_jobs_succeeded** | **int** | the number of jobs in this recurrence that have succeeded. | [optional] [readonly] 
**recurrence_id** | **str** | the recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together. | [optional] [readonly] 
**recurrence_name** | **str** | the recurrence name, user friendly name for the correlation between jobs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_recurrence_information import JobRecurrenceInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobRecurrenceInformation from a JSON string
job_recurrence_information_instance = JobRecurrenceInformation.from_json(json)
# print the JSON string representation of the object
print(JobRecurrenceInformation.to_json())

# convert the object into a dict
job_recurrence_information_dict = job_recurrence_information_instance.to_dict()
# create an instance of JobRecurrenceInformation from a dict
job_recurrence_information_from_dict = JobRecurrenceInformation.from_dict(job_recurrence_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


