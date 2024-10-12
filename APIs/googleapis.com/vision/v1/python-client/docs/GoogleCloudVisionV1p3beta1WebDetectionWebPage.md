# GoogleCloudVisionV1p3beta1WebDetectionWebPage

Metadata for web pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_matching_images** | [**List[GoogleCloudVisionV1p3beta1WebDetectionWebImage]**](GoogleCloudVisionV1p3beta1WebDetectionWebImage.md) | Fully matching images on the page. Can include resized copies of the query image. | [optional] 
**page_title** | **str** | Title for the web page, may contain HTML markups. | [optional] 
**partial_matching_images** | [**List[GoogleCloudVisionV1p3beta1WebDetectionWebImage]**](GoogleCloudVisionV1p3beta1WebDetectionWebImage.md) | Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. | [optional] 
**score** | **float** | (Deprecated) Overall relevancy score for the web page. | [optional] 
**url** | **str** | The result web page URL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_web_detection_web_page import GoogleCloudVisionV1p3beta1WebDetectionWebPage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1WebDetectionWebPage from a JSON string
google_cloud_vision_v1p3beta1_web_detection_web_page_instance = GoogleCloudVisionV1p3beta1WebDetectionWebPage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1WebDetectionWebPage.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_web_detection_web_page_dict = google_cloud_vision_v1p3beta1_web_detection_web_page_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1WebDetectionWebPage from a dict
google_cloud_vision_v1p3beta1_web_detection_web_page_from_dict = GoogleCloudVisionV1p3beta1WebDetectionWebPage.from_dict(google_cloud_vision_v1p3beta1_web_detection_web_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


