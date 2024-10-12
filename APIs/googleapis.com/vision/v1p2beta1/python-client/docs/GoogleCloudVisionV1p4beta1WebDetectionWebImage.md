# GoogleCloudVisionV1p4beta1WebDetectionWebImage

Metadata for online images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | (Deprecated) Overall relevancy score for the image. | [optional] 
**url** | **str** | The result image URL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_web_detection_web_image import GoogleCloudVisionV1p4beta1WebDetectionWebImage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1WebDetectionWebImage from a JSON string
google_cloud_vision_v1p4beta1_web_detection_web_image_instance = GoogleCloudVisionV1p4beta1WebDetectionWebImage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1WebDetectionWebImage.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_web_detection_web_image_dict = google_cloud_vision_v1p4beta1_web_detection_web_image_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1WebDetectionWebImage from a dict
google_cloud_vision_v1p4beta1_web_detection_web_image_from_dict = GoogleCloudVisionV1p4beta1WebDetectionWebImage.from_dict(google_cloud_vision_v1p4beta1_web_detection_web_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


