# ScheduleEntry

Patch schedule entry for a Premium Redis Cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Day of the week when a cache can be patched. | 
**maintenance_window** | **str** | ISO8601 timespan specifying how much time cache patching can take.  | [optional] 
**start_hour_utc** | **int** | Start hour after which cache patching can start. | 

## Example

```python
from openapi_client.models.schedule_entry import ScheduleEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleEntry from a JSON string
schedule_entry_instance = ScheduleEntry.from_json(json)
# print the JSON string representation of the object
print(ScheduleEntry.to_json())

# convert the object into a dict
schedule_entry_dict = schedule_entry_instance.to_dict()
# create an instance of ScheduleEntry from a dict
schedule_entry_from_dict = ScheduleEntry.from_dict(schedule_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


