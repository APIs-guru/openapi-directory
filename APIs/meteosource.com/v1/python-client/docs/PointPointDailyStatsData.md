# PointPointDailyStatsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**precipitation** | [**PointPointDailyStatsPrecipitationData**](PointPointDailyStatsPrecipitationData.md) |  | 
**temperature** | [**PointPointDailyStatsTemperatureData**](PointPointDailyStatsTemperatureData.md) |  | 
**wind** | [**PointPointDailyStatsWindData**](PointPointDailyStatsWindData.md) |  | 

## Example

```python
from openapi_client.models.point_point_daily_stats_data import PointPointDailyStatsData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyStatsData from a JSON string
point_point_daily_stats_data_instance = PointPointDailyStatsData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyStatsData.to_json())

# convert the object into a dict
point_point_daily_stats_data_dict = point_point_daily_stats_data_instance.to_dict()
# create an instance of PointPointDailyStatsData from a dict
point_point_daily_stats_data_from_dict = PointPointDailyStatsData.from_dict(point_point_daily_stats_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


