# TimeMachinePointDailyStatsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**precipitation** | [**TimeMachinePointDailyStatsPrecipitationData**](TimeMachinePointDailyStatsPrecipitationData.md) |  | 
**temperature** | [**TimeMachinePointDailyStatsTemperatureData**](TimeMachinePointDailyStatsTemperatureData.md) |  | 
**wind** | [**TimeMachinePointDailyStatsWindData**](TimeMachinePointDailyStatsWindData.md) |  | 

## Example

```python
from openapi_client.models.time_machine_point_daily_stats_data import TimeMachinePointDailyStatsData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachinePointDailyStatsData from a JSON string
time_machine_point_daily_stats_data_instance = TimeMachinePointDailyStatsData.from_json(json)
# print the JSON string representation of the object
print(TimeMachinePointDailyStatsData.to_json())

# convert the object into a dict
time_machine_point_daily_stats_data_dict = time_machine_point_daily_stats_data_instance.to_dict()
# create an instance of TimeMachinePointDailyStatsData from a dict
time_machine_point_daily_stats_data_from_dict = TimeMachinePointDailyStatsData.from_dict(time_machine_point_daily_stats_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


