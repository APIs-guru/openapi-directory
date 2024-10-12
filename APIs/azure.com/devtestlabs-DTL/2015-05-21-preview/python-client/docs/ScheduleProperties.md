# ScheduleProperties

Properties of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_recurrence** | [**DayDetails**](DayDetails.md) |  | [optional] 
**hourly_recurrence** | [**HourDetails**](HourDetails.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**status** | **str** | The status of the schedule. | [optional] 
**task_type** | **str** | The task type of the schedule. | [optional] 
**time_zone_id** | **str** | The time zone id. | [optional] 
**weekly_recurrence** | [**WeekDetails**](WeekDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_properties import ScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleProperties from a JSON string
schedule_properties_instance = ScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduleProperties.to_json())

# convert the object into a dict
schedule_properties_dict = schedule_properties_instance.to_dict()
# create an instance of ScheduleProperties from a dict
schedule_properties_from_dict = ScheduleProperties.from_dict(schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


