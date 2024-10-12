# SchedulePropertiesFragment

Properties of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_recurrence** | [**DayDetailsFragment**](DayDetailsFragment.md) |  | [optional] 
**hourly_recurrence** | [**HourDetailsFragment**](HourDetailsFragment.md) |  | [optional] 
**notification_settings** | [**NotificationSettingsFragment**](NotificationSettingsFragment.md) |  | [optional] 
**status** | **str** | The status of the schedule (i.e. Enabled, Disabled) | [optional] 
**target_resource_id** | **str** | The resource ID to which the schedule belongs | [optional] 
**task_type** | **str** | The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). | [optional] 
**time_zone_id** | **str** | The time zone ID (e.g. Pacific Standard time). | [optional] 
**weekly_recurrence** | [**WeekDetailsFragment**](WeekDetailsFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_properties_fragment import SchedulePropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulePropertiesFragment from a JSON string
schedule_properties_fragment_instance = SchedulePropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(SchedulePropertiesFragment.to_json())

# convert the object into a dict
schedule_properties_fragment_dict = schedule_properties_fragment_instance.to_dict()
# create an instance of SchedulePropertiesFragment from a dict
schedule_properties_fragment_from_dict = SchedulePropertiesFragment.from_dict(schedule_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


