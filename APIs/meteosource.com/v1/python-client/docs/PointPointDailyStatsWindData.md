# PointPointDailyStatsWindData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_angle** | **float** | Long-term average wind angle. Unit: deg | [optional] 
**avg_dir** | **bytearray** | Long-term average wind direction in &#39;N&#39;, &#39;NNE&#39;, &#39;NE&#39;, ... &#39;NNW&#39; format. Unit: 16dir | [optional] 
**avg_speed** | **float** | Long-term average wind speed. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**max_gust** | **float** | Historical daily maximum wind gust speed. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**max_speed** | **float** | Historical daily maximum wind speed. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_stats_wind_data import PointPointDailyStatsWindData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyStatsWindData from a JSON string
point_point_daily_stats_wind_data_instance = PointPointDailyStatsWindData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyStatsWindData.to_json())

# convert the object into a dict
point_point_daily_stats_wind_data_dict = point_point_daily_stats_wind_data_instance.to_dict()
# create an instance of PointPointDailyStatsWindData from a dict
point_point_daily_stats_wind_data_from_dict = PointPointDailyStatsWindData.from_dict(point_point_daily_stats_wind_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


