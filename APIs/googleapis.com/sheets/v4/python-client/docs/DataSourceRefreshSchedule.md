# DataSourceRefreshSchedule

Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_schedule** | [**DataSourceRefreshDailySchedule**](DataSourceRefreshDailySchedule.md) |  | [optional] 
**enabled** | **bool** | True if the refresh schedule is enabled, or false otherwise. | [optional] 
**monthly_schedule** | [**DataSourceRefreshMonthlySchedule**](DataSourceRefreshMonthlySchedule.md) |  | [optional] 
**next_run** | [**Interval**](Interval.md) |  | [optional] 
**refresh_scope** | **str** | The scope of the refresh. Must be ALL_DATA_SOURCES. | [optional] 
**weekly_schedule** | [**DataSourceRefreshWeeklySchedule**](DataSourceRefreshWeeklySchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_refresh_schedule import DataSourceRefreshSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceRefreshSchedule from a JSON string
data_source_refresh_schedule_instance = DataSourceRefreshSchedule.from_json(json)
# print the JSON string representation of the object
print(DataSourceRefreshSchedule.to_json())

# convert the object into a dict
data_source_refresh_schedule_dict = data_source_refresh_schedule_instance.to_dict()
# create an instance of DataSourceRefreshSchedule from a dict
data_source_refresh_schedule_from_dict = DataSourceRefreshSchedule.from_dict(data_source_refresh_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


