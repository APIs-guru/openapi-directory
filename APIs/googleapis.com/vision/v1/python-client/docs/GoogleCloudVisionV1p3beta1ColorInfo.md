# GoogleCloudVisionV1p3beta1ColorInfo

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**pixel_fraction** | **float** | The fraction of pixels the color occupies in the image. Value in range [0, 1]. | [optional] 
**score** | **float** | Image-specific score for this color. Value in range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_color_info import GoogleCloudVisionV1p3beta1ColorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1ColorInfo from a JSON string
google_cloud_vision_v1p3beta1_color_info_instance = GoogleCloudVisionV1p3beta1ColorInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1ColorInfo.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_color_info_dict = google_cloud_vision_v1p3beta1_color_info_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1ColorInfo from a dict
google_cloud_vision_v1p3beta1_color_info_from_dict = GoogleCloudVisionV1p3beta1ColorInfo.from_dict(google_cloud_vision_v1p3beta1_color_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


