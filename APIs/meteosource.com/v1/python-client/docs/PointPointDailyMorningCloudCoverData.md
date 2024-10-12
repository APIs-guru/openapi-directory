# PointPointDailyMorningCloudCoverData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **float** | Percentage of sky covered by high clouds. (morning avg) Unit: \\% | [optional] 
**low** | **float** | Percentage of sky covered by low clouds. (morning avg) Unit: \\% | [optional] 
**middle** | **float** | Percentage of sky covered by middle clouds. (morning avg) Unit: \\% | [optional] 
**total** | **float** | Percentage of sky covered by clouds. (morning avg) Unit: \\% | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_morning_cloud_cover_data import PointPointDailyMorningCloudCoverData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyMorningCloudCoverData from a JSON string
point_point_daily_morning_cloud_cover_data_instance = PointPointDailyMorningCloudCoverData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyMorningCloudCoverData.to_json())

# convert the object into a dict
point_point_daily_morning_cloud_cover_data_dict = point_point_daily_morning_cloud_cover_data_instance.to_dict()
# create an instance of PointPointDailyMorningCloudCoverData from a dict
point_point_daily_morning_cloud_cover_data_from_dict = PointPointDailyMorningCloudCoverData.from_dict(point_point_daily_morning_cloud_cover_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


