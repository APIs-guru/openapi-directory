# ScheduleEntries

List of patch schedules for a Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_entries** | [**List[ScheduleEntry]**](ScheduleEntry.md) | List of patch schedules for a Redis cache. | 

## Example

```python
from openapi_client.models.schedule_entries import ScheduleEntries

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleEntries from a JSON string
schedule_entries_instance = ScheduleEntries.from_json(json)
# print the JSON string representation of the object
print(ScheduleEntries.to_json())

# convert the object into a dict
schedule_entries_dict = schedule_entries_instance.to_dict()
# create an instance of ScheduleEntries from a dict
schedule_entries_from_dict = ScheduleEntries.from_dict(schedule_entries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


