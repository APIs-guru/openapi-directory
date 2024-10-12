# JobRecurrenceScheduleMonthlyOccurrence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrence** | **int** | Gets or sets the occurrence. Must be between -5 and 5. | [optional] 
**day** | **str** | Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | [optional] 

## Example

```python
from openapi_client.models.job_recurrence_schedule_monthly_occurrence import JobRecurrenceScheduleMonthlyOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of JobRecurrenceScheduleMonthlyOccurrence from a JSON string
job_recurrence_schedule_monthly_occurrence_instance = JobRecurrenceScheduleMonthlyOccurrence.from_json(json)
# print the JSON string representation of the object
print(JobRecurrenceScheduleMonthlyOccurrence.to_json())

# convert the object into a dict
job_recurrence_schedule_monthly_occurrence_dict = job_recurrence_schedule_monthly_occurrence_instance.to_dict()
# create an instance of JobRecurrenceScheduleMonthlyOccurrence from a dict
job_recurrence_schedule_monthly_occurrence_from_dict = JobRecurrenceScheduleMonthlyOccurrence.from_dict(job_recurrence_schedule_monthly_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


