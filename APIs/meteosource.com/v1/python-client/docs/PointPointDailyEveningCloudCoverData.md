# PointPointDailyEveningCloudCoverData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **float** | Percentage of sky covered by high clouds. (evening avg) Unit: \\% | [optional] 
**low** | **float** | Percentage of sky covered by low clouds. (evening avg) Unit: \\% | [optional] 
**middle** | **float** | Percentage of sky covered by middle clouds. (evening avg) Unit: \\% | [optional] 
**total** | **float** | Percentage of sky covered by clouds. (evening avg) Unit: \\% | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_evening_cloud_cover_data import PointPointDailyEveningCloudCoverData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyEveningCloudCoverData from a JSON string
point_point_daily_evening_cloud_cover_data_instance = PointPointDailyEveningCloudCoverData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyEveningCloudCoverData.to_json())

# convert the object into a dict
point_point_daily_evening_cloud_cover_data_dict = point_point_daily_evening_cloud_cover_data_instance.to_dict()
# create an instance of PointPointDailyEveningCloudCoverData from a dict
point_point_daily_evening_cloud_cover_data_from_dict = PointPointDailyEveningCloudCoverData.from_dict(point_point_daily_evening_cloud_cover_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


