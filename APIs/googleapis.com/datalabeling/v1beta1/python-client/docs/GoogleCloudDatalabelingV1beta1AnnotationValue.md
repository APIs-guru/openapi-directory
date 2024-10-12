# GoogleCloudDatalabelingV1beta1AnnotationValue

Annotation value for an example.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_bounding_poly_annotation** | [**GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation**](GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation.md) |  | [optional] 
**image_classification_annotation** | [**GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation**](GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation.md) |  | [optional] 
**image_polyline_annotation** | [**GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation**](GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.md) |  | [optional] 
**image_segmentation_annotation** | [**GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation**](GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation.md) |  | [optional] 
**text_classification_annotation** | [**GoogleCloudDatalabelingV1beta1TextClassificationAnnotation**](GoogleCloudDatalabelingV1beta1TextClassificationAnnotation.md) |  | [optional] 
**text_entity_extraction_annotation** | [**GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation**](GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation.md) |  | [optional] 
**video_classification_annotation** | [**GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation**](GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation.md) |  | [optional] 
**video_event_annotation** | [**GoogleCloudDatalabelingV1beta1VideoEventAnnotation**](GoogleCloudDatalabelingV1beta1VideoEventAnnotation.md) |  | [optional] 
**video_object_tracking_annotation** | [**GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation**](GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation_value import GoogleCloudDatalabelingV1beta1AnnotationValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationValue from a JSON string
google_cloud_datalabeling_v1beta1_annotation_value_instance = GoogleCloudDatalabelingV1beta1AnnotationValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotationValue.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_value_dict = google_cloud_datalabeling_v1beta1_annotation_value_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationValue from a dict
google_cloud_datalabeling_v1beta1_annotation_value_from_dict = GoogleCloudDatalabelingV1beta1AnnotationValue.from_dict(google_cloud_datalabeling_v1beta1_annotation_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


