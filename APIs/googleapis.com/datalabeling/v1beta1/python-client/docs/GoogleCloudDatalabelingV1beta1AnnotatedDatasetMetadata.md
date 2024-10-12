# GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata

Metadata on AnnotatedDataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly_config** | [**GoogleCloudDatalabelingV1beta1BoundingPolyConfig**](GoogleCloudDatalabelingV1beta1BoundingPolyConfig.md) |  | [optional] 
**event_config** | [**GoogleCloudDatalabelingV1beta1EventConfig**](GoogleCloudDatalabelingV1beta1EventConfig.md) |  | [optional] 
**human_annotation_config** | [**GoogleCloudDatalabelingV1beta1HumanAnnotationConfig**](GoogleCloudDatalabelingV1beta1HumanAnnotationConfig.md) |  | [optional] 
**image_classification_config** | [**GoogleCloudDatalabelingV1beta1ImageClassificationConfig**](GoogleCloudDatalabelingV1beta1ImageClassificationConfig.md) |  | [optional] 
**object_detection_config** | [**GoogleCloudDatalabelingV1beta1ObjectDetectionConfig**](GoogleCloudDatalabelingV1beta1ObjectDetectionConfig.md) |  | [optional] 
**object_tracking_config** | [**GoogleCloudDatalabelingV1beta1ObjectTrackingConfig**](GoogleCloudDatalabelingV1beta1ObjectTrackingConfig.md) |  | [optional] 
**polyline_config** | [**GoogleCloudDatalabelingV1beta1PolylineConfig**](GoogleCloudDatalabelingV1beta1PolylineConfig.md) |  | [optional] 
**segmentation_config** | [**GoogleCloudDatalabelingV1beta1SegmentationConfig**](GoogleCloudDatalabelingV1beta1SegmentationConfig.md) |  | [optional] 
**text_classification_config** | [**GoogleCloudDatalabelingV1beta1TextClassificationConfig**](GoogleCloudDatalabelingV1beta1TextClassificationConfig.md) |  | [optional] 
**text_entity_extraction_config** | [**GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig**](GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig.md) |  | [optional] 
**video_classification_config** | [**GoogleCloudDatalabelingV1beta1VideoClassificationConfig**](GoogleCloudDatalabelingV1beta1VideoClassificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotated_dataset_metadata import GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata from a JSON string
google_cloud_datalabeling_v1beta1_annotated_dataset_metadata_instance = GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotated_dataset_metadata_dict = google_cloud_datalabeling_v1beta1_annotated_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata from a dict
google_cloud_datalabeling_v1beta1_annotated_dataset_metadata_from_dict = GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.from_dict(google_cloud_datalabeling_v1beta1_annotated_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


