# GoogleCloudVisionV1p4beta1LocationInfo

Detected entity location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_location_info import GoogleCloudVisionV1p4beta1LocationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1LocationInfo from a JSON string
google_cloud_vision_v1p4beta1_location_info_instance = GoogleCloudVisionV1p4beta1LocationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1LocationInfo.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_location_info_dict = google_cloud_vision_v1p4beta1_location_info_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1LocationInfo from a dict
google_cloud_vision_v1p4beta1_location_info_from_dict = GoogleCloudVisionV1p4beta1LocationInfo.from_dict(google_cloud_vision_v1p4beta1_location_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


