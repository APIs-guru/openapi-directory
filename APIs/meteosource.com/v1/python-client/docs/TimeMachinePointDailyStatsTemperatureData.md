# TimeMachinePointDailyStatsTemperatureData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg** | **float** | Long-term temperature average. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**avg_max** | **float** | Long-term daily maximum temperature average. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**avg_min** | **float** | Long-term daily minimum temperature average. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**record_max** | **float** | Historical daily maximum. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**record_min** | **float** | Historical daily minimum temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 

## Example

```python
from openapi_client.models.time_machine_point_daily_stats_temperature_data import TimeMachinePointDailyStatsTemperatureData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachinePointDailyStatsTemperatureData from a JSON string
time_machine_point_daily_stats_temperature_data_instance = TimeMachinePointDailyStatsTemperatureData.from_json(json)
# print the JSON string representation of the object
print(TimeMachinePointDailyStatsTemperatureData.to_json())

# convert the object into a dict
time_machine_point_daily_stats_temperature_data_dict = time_machine_point_daily_stats_temperature_data_instance.to_dict()
# create an instance of TimeMachinePointDailyStatsTemperatureData from a dict
time_machine_point_daily_stats_temperature_data_from_dict = TimeMachinePointDailyStatsTemperatureData.from_dict(time_machine_point_daily_stats_temperature_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


