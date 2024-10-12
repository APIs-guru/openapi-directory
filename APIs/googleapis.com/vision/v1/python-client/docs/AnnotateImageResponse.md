# AnnotateImageResponse

Response to an image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ImageAnnotationContext**](ImageAnnotationContext.md) |  | [optional] 
**crop_hints_annotation** | [**CropHintsAnnotation**](CropHintsAnnotation.md) |  | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**face_annotations** | [**List[FaceAnnotation]**](FaceAnnotation.md) | If present, face detection has completed successfully. | [optional] 
**full_text_annotation** | [**TextAnnotation**](TextAnnotation.md) |  | [optional] 
**image_properties_annotation** | [**ImageProperties**](ImageProperties.md) |  | [optional] 
**label_annotations** | [**List[EntityAnnotation]**](EntityAnnotation.md) | If present, label detection has completed successfully. | [optional] 
**landmark_annotations** | [**List[EntityAnnotation]**](EntityAnnotation.md) | If present, landmark detection has completed successfully. | [optional] 
**localized_object_annotations** | [**List[LocalizedObjectAnnotation]**](LocalizedObjectAnnotation.md) | If present, localized object detection has completed successfully. This will be sorted descending by confidence score. | [optional] 
**logo_annotations** | [**List[EntityAnnotation]**](EntityAnnotation.md) | If present, logo detection has completed successfully. | [optional] 
**product_search_results** | [**ProductSearchResults**](ProductSearchResults.md) |  | [optional] 
**safe_search_annotation** | [**SafeSearchAnnotation**](SafeSearchAnnotation.md) |  | [optional] 
**text_annotations** | [**List[EntityAnnotation]**](EntityAnnotation.md) | If present, text (OCR) detection has completed successfully. | [optional] 
**web_detection** | [**WebDetection**](WebDetection.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotate_image_response import AnnotateImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateImageResponse from a JSON string
annotate_image_response_instance = AnnotateImageResponse.from_json(json)
# print the JSON string representation of the object
print(AnnotateImageResponse.to_json())

# convert the object into a dict
annotate_image_response_dict = annotate_image_response_instance.to_dict()
# create an instance of AnnotateImageResponse from a dict
annotate_image_response_from_dict = AnnotateImageResponse.from_dict(annotate_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


