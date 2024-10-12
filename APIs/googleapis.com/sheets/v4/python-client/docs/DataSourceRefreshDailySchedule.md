# DataSourceRefreshDailySchedule

A schedule for data to refresh every day in a given time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_refresh_daily_schedule import DataSourceRefreshDailySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceRefreshDailySchedule from a JSON string
data_source_refresh_daily_schedule_instance = DataSourceRefreshDailySchedule.from_json(json)
# print the JSON string representation of the object
print(DataSourceRefreshDailySchedule.to_json())

# convert the object into a dict
data_source_refresh_daily_schedule_dict = data_source_refresh_daily_schedule_instance.to_dict()
# create an instance of DataSourceRefreshDailySchedule from a dict
data_source_refresh_daily_schedule_from_dict = DataSourceRefreshDailySchedule.from_dict(data_source_refresh_daily_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


