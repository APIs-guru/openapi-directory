# ChaosScheduleJobActiveDaysOfWeek

Defines the days of the week that a Chaos Schedule Job will run for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friday** | **bool** | Indicates if the Chaos Schedule Job will run on Friday | [optional] [default to False]
**monday** | **bool** | Indicates if the Chaos Schedule Job will run on Monday | [optional] [default to False]
**saturday** | **bool** | Indicates if the Chaos Schedule Job will run on Saturday | [optional] [default to False]
**sunday** | **bool** | Indicates if the Chaos Schedule Job will run on Sunday | [optional] [default to False]
**thursday** | **bool** | Indicates if the Chaos Schedule Job will run on Thursday | [optional] [default to False]
**tuesday** | **bool** | Indicates if the Chaos Schedule Job will run on Tuesday | [optional] [default to False]
**wednesday** | **bool** | Indicates if the Chaos Schedule Job will run on Wednesday | [optional] [default to False]

## Example

```python
from openapi_client.models.chaos_schedule_job_active_days_of_week import ChaosScheduleJobActiveDaysOfWeek

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosScheduleJobActiveDaysOfWeek from a JSON string
chaos_schedule_job_active_days_of_week_instance = ChaosScheduleJobActiveDaysOfWeek.from_json(json)
# print the JSON string representation of the object
print(ChaosScheduleJobActiveDaysOfWeek.to_json())

# convert the object into a dict
chaos_schedule_job_active_days_of_week_dict = chaos_schedule_job_active_days_of_week_instance.to_dict()
# create an instance of ChaosScheduleJobActiveDaysOfWeek from a dict
chaos_schedule_job_active_days_of_week_from_dict = ChaosScheduleJobActiveDaysOfWeek.from_dict(chaos_schedule_job_active_days_of_week_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


