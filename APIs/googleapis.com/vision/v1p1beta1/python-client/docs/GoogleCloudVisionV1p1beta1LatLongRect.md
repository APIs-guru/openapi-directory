# GoogleCloudVisionV1p1beta1LatLongRect

Rectangle determined by min and max `LatLng` pairs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 
**min_lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_lat_long_rect import GoogleCloudVisionV1p1beta1LatLongRect

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1LatLongRect from a JSON string
google_cloud_vision_v1p1beta1_lat_long_rect_instance = GoogleCloudVisionV1p1beta1LatLongRect.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1LatLongRect.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_lat_long_rect_dict = google_cloud_vision_v1p1beta1_lat_long_rect_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1LatLongRect from a dict
google_cloud_vision_v1p1beta1_lat_long_rect_from_dict = GoogleCloudVisionV1p1beta1LatLongRect.from_dict(google_cloud_vision_v1p1beta1_lat_long_rect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


