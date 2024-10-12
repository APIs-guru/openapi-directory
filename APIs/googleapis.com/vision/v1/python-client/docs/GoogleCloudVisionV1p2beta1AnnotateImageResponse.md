# GoogleCloudVisionV1p2beta1AnnotateImageResponse

Response to an image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GoogleCloudVisionV1p2beta1ImageAnnotationContext**](GoogleCloudVisionV1p2beta1ImageAnnotationContext.md) |  | [optional] 
**crop_hints_annotation** | [**GoogleCloudVisionV1p2beta1CropHintsAnnotation**](GoogleCloudVisionV1p2beta1CropHintsAnnotation.md) |  | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**face_annotations** | [**List[GoogleCloudVisionV1p2beta1FaceAnnotation]**](GoogleCloudVisionV1p2beta1FaceAnnotation.md) | If present, face detection has completed successfully. | [optional] 
**full_text_annotation** | [**GoogleCloudVisionV1p2beta1TextAnnotation**](GoogleCloudVisionV1p2beta1TextAnnotation.md) |  | [optional] 
**image_properties_annotation** | [**GoogleCloudVisionV1p2beta1ImageProperties**](GoogleCloudVisionV1p2beta1ImageProperties.md) |  | [optional] 
**label_annotations** | [**List[GoogleCloudVisionV1p2beta1EntityAnnotation]**](GoogleCloudVisionV1p2beta1EntityAnnotation.md) | If present, label detection has completed successfully. | [optional] 
**landmark_annotations** | [**List[GoogleCloudVisionV1p2beta1EntityAnnotation]**](GoogleCloudVisionV1p2beta1EntityAnnotation.md) | If present, landmark detection has completed successfully. | [optional] 
**localized_object_annotations** | [**List[GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation]**](GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation.md) | If present, localized object detection has completed successfully. This will be sorted descending by confidence score. | [optional] 
**logo_annotations** | [**List[GoogleCloudVisionV1p2beta1EntityAnnotation]**](GoogleCloudVisionV1p2beta1EntityAnnotation.md) | If present, logo detection has completed successfully. | [optional] 
**product_search_results** | [**GoogleCloudVisionV1p2beta1ProductSearchResults**](GoogleCloudVisionV1p2beta1ProductSearchResults.md) |  | [optional] 
**safe_search_annotation** | [**GoogleCloudVisionV1p2beta1SafeSearchAnnotation**](GoogleCloudVisionV1p2beta1SafeSearchAnnotation.md) |  | [optional] 
**text_annotations** | [**List[GoogleCloudVisionV1p2beta1EntityAnnotation]**](GoogleCloudVisionV1p2beta1EntityAnnotation.md) | If present, text (OCR) detection has completed successfully. | [optional] 
**web_detection** | [**GoogleCloudVisionV1p2beta1WebDetection**](GoogleCloudVisionV1p2beta1WebDetection.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_annotate_image_response import GoogleCloudVisionV1p2beta1AnnotateImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1AnnotateImageResponse from a JSON string
google_cloud_vision_v1p2beta1_annotate_image_response_instance = GoogleCloudVisionV1p2beta1AnnotateImageResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1AnnotateImageResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_annotate_image_response_dict = google_cloud_vision_v1p2beta1_annotate_image_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1AnnotateImageResponse from a dict
google_cloud_vision_v1p2beta1_annotate_image_response_from_dict = GoogleCloudVisionV1p2beta1AnnotateImageResponse.from_dict(google_cloud_vision_v1p2beta1_annotate_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


