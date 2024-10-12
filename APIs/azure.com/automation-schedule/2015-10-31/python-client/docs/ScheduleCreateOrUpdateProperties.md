# ScheduleCreateOrUpdateProperties

The parameters supplied to the create or update schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_schedule** | [**AdvancedSchedule**](AdvancedSchedule.md) |  | [optional] 
**description** | **str** | Gets or sets the description of the schedule. | [optional] 
**expiry_time** | **datetime** | Gets or sets the end time of the schedule. | [optional] 
**frequency** | [**ScheduleFrequency**](ScheduleFrequency.md) |  | 
**interval** | **object** | Gets or sets the interval of the schedule. | [optional] 
**start_time** | **datetime** | Gets or sets the start time of the schedule. | 
**time_zone** | **str** | Gets or sets the time zone of the schedule. | [optional] 

## Example

```python
from openapi_client.models.schedule_create_or_update_properties import ScheduleCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreateOrUpdateProperties from a JSON string
schedule_create_or_update_properties_instance = ScheduleCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreateOrUpdateProperties.to_json())

# convert the object into a dict
schedule_create_or_update_properties_dict = schedule_create_or_update_properties_instance.to_dict()
# create an instance of ScheduleCreateOrUpdateProperties from a dict
schedule_create_or_update_properties_from_dict = ScheduleCreateOrUpdateProperties.from_dict(schedule_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


