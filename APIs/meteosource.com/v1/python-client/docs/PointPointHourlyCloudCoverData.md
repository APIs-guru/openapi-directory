# PointPointHourlyCloudCoverData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **float** | Percentage of sky covered by high clouds. Unit: \\% | [optional] 
**low** | **float** | Percentage of sky covered by low clouds. Unit: \\% | [optional] 
**middle** | **float** | Percentage of sky covered by middle clouds. Unit: \\% | [optional] 
**total** | **float** | Unit: \\% | [optional] 

## Example

```python
from openapi_client.models.point_point_hourly_cloud_cover_data import PointPointHourlyCloudCoverData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointHourlyCloudCoverData from a JSON string
point_point_hourly_cloud_cover_data_instance = PointPointHourlyCloudCoverData.from_json(json)
# print the JSON string representation of the object
print(PointPointHourlyCloudCoverData.to_json())

# convert the object into a dict
point_point_hourly_cloud_cover_data_dict = point_point_hourly_cloud_cover_data_instance.to_dict()
# create an instance of PointPointHourlyCloudCoverData from a dict
point_point_hourly_cloud_cover_data_from_dict = PointPointHourlyCloudCoverData.from_dict(point_point_hourly_cloud_cover_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


