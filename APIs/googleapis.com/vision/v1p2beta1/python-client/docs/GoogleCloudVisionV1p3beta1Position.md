# GoogleCloudVisionV1p3beta1Position

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | X coordinate. | [optional] 
**y** | **float** | Y coordinate. | [optional] 
**z** | **float** | Z coordinate (or depth). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_position import GoogleCloudVisionV1p3beta1Position

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1Position from a JSON string
google_cloud_vision_v1p3beta1_position_instance = GoogleCloudVisionV1p3beta1Position.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1Position.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_position_dict = google_cloud_vision_v1p3beta1_position_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1Position from a dict
google_cloud_vision_v1p3beta1_position_from_dict = GoogleCloudVisionV1p3beta1Position.from_dict(google_cloud_vision_v1p3beta1_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


