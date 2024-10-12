# JobRecurrenceSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **List[int]** | Gets or sets the hours of the day that the job should execute at. | [optional] 
**minutes** | **List[int]** | Gets or sets the minutes of the hour that the job should execute at. | [optional] 
**month_days** | **List[int]** | Gets or sets the days of the month that the job should execute on. Must be between 1 and 31. | [optional] 
**monthly_occurrences** | [**List[JobRecurrenceScheduleMonthlyOccurrence]**](JobRecurrenceScheduleMonthlyOccurrence.md) | Gets or sets the occurrences of days within a month. | [optional] 
**week_days** | **List[str]** | Gets or sets the days of the week that the job should execute on. | [optional] 

## Example

```python
from openapi_client.models.job_recurrence_schedule import JobRecurrenceSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of JobRecurrenceSchedule from a JSON string
job_recurrence_schedule_instance = JobRecurrenceSchedule.from_json(json)
# print the JSON string representation of the object
print(JobRecurrenceSchedule.to_json())

# convert the object into a dict
job_recurrence_schedule_dict = job_recurrence_schedule_instance.to_dict()
# create an instance of JobRecurrenceSchedule from a dict
job_recurrence_schedule_from_dict = JobRecurrenceSchedule.from_dict(job_recurrence_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


