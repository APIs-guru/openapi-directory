# JobSchedule

Scheduling properties of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether or not the schedule is enabled. | [optional] 
**end_time** | **datetime** | Schedule end time. | [optional] 
**interval** | **str** | Value of the schedule&#39;s recurring interval, if the schedule type is recurring. ISO8601 duration format. | [optional] 
**start_time** | **datetime** | Schedule start time. | [optional] 
**type** | **str** | Schedule interval type | [optional] [default to 'Once']

## Example

```python
from openapi_client.models.job_schedule import JobSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of JobSchedule from a JSON string
job_schedule_instance = JobSchedule.from_json(json)
# print the JSON string representation of the object
print(JobSchedule.to_json())

# convert the object into a dict
job_schedule_dict = job_schedule_instance.to_dict()
# create an instance of JobSchedule from a dict
job_schedule_from_dict = JobSchedule.from_dict(job_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


