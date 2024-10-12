# ScheduleRecurrence

The schedule recurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence_type** | **str** | The recurrence type. | 
**recurrence_value** | **int** | The recurrence value. | 
**weekly_days_list** | **List[str]** | The week days list. Applicable only for schedules of recurrence type &#39;weekly&#39;. | [optional] 

## Example

```python
from openapi_client.models.schedule_recurrence import ScheduleRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleRecurrence from a JSON string
schedule_recurrence_instance = ScheduleRecurrence.from_json(json)
# print the JSON string representation of the object
print(ScheduleRecurrence.to_json())

# convert the object into a dict
schedule_recurrence_dict = schedule_recurrence_instance.to_dict()
# create an instance of ScheduleRecurrence from a dict
schedule_recurrence_from_dict = ScheduleRecurrence.from_dict(schedule_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


