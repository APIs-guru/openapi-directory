# GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse

Response to a batch image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[GoogleCloudVisionV1p2beta1AnnotateImageResponse]**](GoogleCloudVisionV1p2beta1AnnotateImageResponse.md) | Individual responses to image annotation requests within the batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_batch_annotate_images_response import GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse from a JSON string
google_cloud_vision_v1p2beta1_batch_annotate_images_response_instance = GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_batch_annotate_images_response_dict = google_cloud_vision_v1p2beta1_batch_annotate_images_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse from a dict
google_cloud_vision_v1p2beta1_batch_annotate_images_response_from_dict = GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse.from_dict(google_cloud_vision_v1p2beta1_batch_annotate_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


