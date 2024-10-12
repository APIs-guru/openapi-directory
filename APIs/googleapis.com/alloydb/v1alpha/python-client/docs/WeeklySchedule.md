# WeeklySchedule

A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week. The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element \"22:00\" and the `days_of_week` field to have all seven days of the week.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_week** | **List[str]** | The days of the week to perform a backup. If this field is left empty, the default of every day of the week is used. | [optional] 
**start_times** | [**List[GoogleTypeTimeOfDay]**](GoogleTypeTimeOfDay.md) | The times during the day to start a backup. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00). If no start times are provided, a single fixed start time is chosen arbitrarily. | [optional] 

## Example

```python
from openapi_client.models.weekly_schedule import WeeklySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of WeeklySchedule from a JSON string
weekly_schedule_instance = WeeklySchedule.from_json(json)
# print the JSON string representation of the object
print(WeeklySchedule.to_json())

# convert the object into a dict
weekly_schedule_dict = weekly_schedule_instance.to_dict()
# create an instance of WeeklySchedule from a dict
weekly_schedule_from_dict = WeeklySchedule.from_dict(weekly_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


