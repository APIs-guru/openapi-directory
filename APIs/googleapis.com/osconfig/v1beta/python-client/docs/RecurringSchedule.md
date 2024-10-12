# RecurringSchedule

Sets the time for recurring patch deployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Optional. The end time at which a recurring patch deployment schedule is no longer active. | [optional] 
**frequency** | **str** | Required. The frequency unit of this recurring schedule. | [optional] 
**last_execute_time** | **str** | Output only. The time the last patch job ran successfully. | [optional] [readonly] 
**monthly** | [**MonthlySchedule**](MonthlySchedule.md) |  | [optional] 
**next_execute_time** | **str** | Output only. The time the next patch job is scheduled to run. | [optional] [readonly] 
**start_time** | **str** | Optional. The time that the recurring schedule becomes effective. Defaults to &#x60;create_time&#x60; of the patch deployment. | [optional] 
**time_of_day** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] 
**weekly** | [**WeeklySchedule**](WeeklySchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.recurring_schedule import RecurringSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringSchedule from a JSON string
recurring_schedule_instance = RecurringSchedule.from_json(json)
# print the JSON string representation of the object
print(RecurringSchedule.to_json())

# convert the object into a dict
recurring_schedule_dict = recurring_schedule_instance.to_dict()
# create an instance of RecurringSchedule from a dict
recurring_schedule_from_dict = RecurringSchedule.from_dict(recurring_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


