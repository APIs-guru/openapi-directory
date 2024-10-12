# DataSourceRefreshWeeklySchedule

A weekly schedule for data to refresh on specific days in a given time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_week** | **List[str]** | Days of the week to refresh. At least one day must be specified. | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_refresh_weekly_schedule import DataSourceRefreshWeeklySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceRefreshWeeklySchedule from a JSON string
data_source_refresh_weekly_schedule_instance = DataSourceRefreshWeeklySchedule.from_json(json)
# print the JSON string representation of the object
print(DataSourceRefreshWeeklySchedule.to_json())

# convert the object into a dict
data_source_refresh_weekly_schedule_dict = data_source_refresh_weekly_schedule_instance.to_dict()
# create an instance of DataSourceRefreshWeeklySchedule from a dict
data_source_refresh_weekly_schedule_from_dict = DataSourceRefreshWeeklySchedule.from_dict(data_source_refresh_weekly_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


