# ScheduleCreationParameterProperties

Properties for schedule creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_recurrence** | [**DayDetails**](DayDetails.md) |  | [optional] 
**hourly_recurrence** | [**HourDetails**](HourDetails.md) |  | [optional] 
**notification_settings** | [**NotificationSettings**](NotificationSettings.md) |  | [optional] 
**status** | **str** | The status of the schedule (i.e. Enabled, Disabled) | [optional] 
**target_resource_id** | **str** | The resource ID to which the schedule belongs | [optional] 
**task_type** | **str** | The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). | [optional] 
**time_zone_id** | **str** | The time zone ID (e.g. Pacific Standard time). | [optional] 
**weekly_recurrence** | [**WeekDetails**](WeekDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_creation_parameter_properties import ScheduleCreationParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreationParameterProperties from a JSON string
schedule_creation_parameter_properties_instance = ScheduleCreationParameterProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreationParameterProperties.to_json())

# convert the object into a dict
schedule_creation_parameter_properties_dict = schedule_creation_parameter_properties_instance.to_dict()
# create an instance of ScheduleCreationParameterProperties from a dict
schedule_creation_parameter_properties_from_dict = ScheduleCreationParameterProperties.from_dict(schedule_creation_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


