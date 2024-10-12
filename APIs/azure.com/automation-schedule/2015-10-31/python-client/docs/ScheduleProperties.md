# ScheduleProperties

Definition of schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_schedule** | [**AdvancedSchedule**](AdvancedSchedule.md) |  | [optional] 
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**expiry_time** | **datetime** | Gets or sets the end time of the schedule. | [optional] 
**expiry_time_offset_minutes** | **float** | Gets or sets the expiry time&#39;s offset in minutes. | [optional] 
**frequency** | [**ScheduleFrequency**](ScheduleFrequency.md) |  | [optional] 
**interval** | **object** | Gets or sets the interval of the schedule. | [optional] 
**is_enabled** | **bool** | Gets or sets a value indicating whether this schedule is enabled. | [optional] [default to False]
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**next_run** | **datetime** | Gets or sets the next run time of the schedule. | [optional] 
**next_run_offset_minutes** | **float** | Gets or sets the next run time&#39;s offset in minutes. | [optional] 
**start_time** | **datetime** | Gets or sets the start time of the schedule. | [optional] 
**start_time_offset_minutes** | **float** | Gets the start time&#39;s offset in minutes. | [optional] [readonly] 
**time_zone** | **str** | Gets or sets the time zone of the schedule. | [optional] 

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


