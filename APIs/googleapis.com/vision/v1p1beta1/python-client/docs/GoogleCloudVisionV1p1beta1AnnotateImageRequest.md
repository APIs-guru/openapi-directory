# GoogleCloudVisionV1p1beta1AnnotateImageRequest

Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[GoogleCloudVisionV1p1beta1Feature]**](GoogleCloudVisionV1p1beta1Feature.md) | Requested features. | [optional] 
**image** | [**GoogleCloudVisionV1p1beta1Image**](GoogleCloudVisionV1p1beta1Image.md) |  | [optional] 
**image_context** | [**GoogleCloudVisionV1p1beta1ImageContext**](GoogleCloudVisionV1p1beta1ImageContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_annotate_image_request import GoogleCloudVisionV1p1beta1AnnotateImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1AnnotateImageRequest from a JSON string
google_cloud_vision_v1p1beta1_annotate_image_request_instance = GoogleCloudVisionV1p1beta1AnnotateImageRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1AnnotateImageRequest.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_annotate_image_request_dict = google_cloud_vision_v1p1beta1_annotate_image_request_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1AnnotateImageRequest from a dict
google_cloud_vision_v1p1beta1_annotate_image_request_from_dict = GoogleCloudVisionV1p1beta1AnnotateImageRequest.from_dict(google_cloud_vision_v1p1beta1_annotate_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


