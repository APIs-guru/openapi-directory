# PointPointDailyStatsPrecipitationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg** | **float** | Long-term average daily precipitation amount. Units: metric &#x3D; mm/day, us &#x3D; inches per day, uk &#x3D; mm/day, ca &#x3D; mm/day | [optional] 
**probability** | **int** | Long-term average precipitation probability. Unit: \\% | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_stats_precipitation_data import PointPointDailyStatsPrecipitationData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyStatsPrecipitationData from a JSON string
point_point_daily_stats_precipitation_data_instance = PointPointDailyStatsPrecipitationData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyStatsPrecipitationData.to_json())

# convert the object into a dict
point_point_daily_stats_precipitation_data_dict = point_point_daily_stats_precipitation_data_instance.to_dict()
# create an instance of PointPointDailyStatsPrecipitationData from a dict
point_point_daily_stats_precipitation_data_from_dict = PointPointDailyStatsPrecipitationData.from_dict(point_point_daily_stats_precipitation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


