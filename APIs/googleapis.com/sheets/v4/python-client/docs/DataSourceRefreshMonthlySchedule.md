# DataSourceRefreshMonthlySchedule

A monthly schedule for data to refresh on specific days in the month in a given time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_month** | **List[int]** | Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified. | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_refresh_monthly_schedule import DataSourceRefreshMonthlySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceRefreshMonthlySchedule from a JSON string
data_source_refresh_monthly_schedule_instance = DataSourceRefreshMonthlySchedule.from_json(json)
# print the JSON string representation of the object
print(DataSourceRefreshMonthlySchedule.to_json())

# convert the object into a dict
data_source_refresh_monthly_schedule_dict = data_source_refresh_monthly_schedule_instance.to_dict()
# create an instance of DataSourceRefreshMonthlySchedule from a dict
data_source_refresh_monthly_schedule_from_dict = DataSourceRefreshMonthlySchedule.from_dict(data_source_refresh_monthly_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


