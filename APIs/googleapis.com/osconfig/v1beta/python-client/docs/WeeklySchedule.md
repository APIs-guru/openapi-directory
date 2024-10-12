# WeeklySchedule

Represents a weekly schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Required. Day of the week. | [optional] 

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


