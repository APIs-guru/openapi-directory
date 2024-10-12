# PointPointDailyStatsTemperatureData


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
from openapi_client.models.point_point_daily_stats_temperature_data import PointPointDailyStatsTemperatureData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyStatsTemperatureData from a JSON string
point_point_daily_stats_temperature_data_instance = PointPointDailyStatsTemperatureData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyStatsTemperatureData.to_json())

# convert the object into a dict
point_point_daily_stats_temperature_data_dict = point_point_daily_stats_temperature_data_instance.to_dict()
# create an instance of PointPointDailyStatsTemperatureData from a dict
point_point_daily_stats_temperature_data_from_dict = PointPointDailyStatsTemperatureData.from_dict(point_point_daily_stats_temperature_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


