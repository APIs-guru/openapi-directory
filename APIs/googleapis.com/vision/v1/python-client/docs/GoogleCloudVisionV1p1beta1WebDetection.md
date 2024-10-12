# GoogleCloudVisionV1p1beta1WebDetection

Relevant information for the image from the Internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_guess_labels** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebLabel]**](GoogleCloudVisionV1p1beta1WebDetectionWebLabel.md) | The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web. | [optional] 
**full_matching_images** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebImage]**](GoogleCloudVisionV1p1beta1WebDetectionWebImage.md) | Fully matching images from the Internet. Can include resized copies of the query image. | [optional] 
**pages_with_matching_images** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebPage]**](GoogleCloudVisionV1p1beta1WebDetectionWebPage.md) | Web pages containing the matching images from the Internet. | [optional] 
**partial_matching_images** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebImage]**](GoogleCloudVisionV1p1beta1WebDetectionWebImage.md) | Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. | [optional] 
**visually_similar_images** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebImage]**](GoogleCloudVisionV1p1beta1WebDetectionWebImage.md) | The visually similar image results. | [optional] 
**web_entities** | [**List[GoogleCloudVisionV1p1beta1WebDetectionWebEntity]**](GoogleCloudVisionV1p1beta1WebDetectionWebEntity.md) | Deduced entities from similar images on the Internet. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_web_detection import GoogleCloudVisionV1p1beta1WebDetection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1WebDetection from a JSON string
google_cloud_vision_v1p1beta1_web_detection_instance = GoogleCloudVisionV1p1beta1WebDetection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1WebDetection.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_web_detection_dict = google_cloud_vision_v1p1beta1_web_detection_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1WebDetection from a dict
google_cloud_vision_v1p1beta1_web_detection_from_dict = GoogleCloudVisionV1p1beta1WebDetection.from_dict(google_cloud_vision_v1p1beta1_web_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


