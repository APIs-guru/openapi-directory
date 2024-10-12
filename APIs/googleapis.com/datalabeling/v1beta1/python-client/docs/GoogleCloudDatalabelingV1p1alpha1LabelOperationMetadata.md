# GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Output only. The name of annotated dataset in format \&quot;projects/*/datasets/*/annotatedDatasets/*\&quot;. | [optional] 
**create_time** | **str** | Output only. Timestamp when labeling request was created. | [optional] 
**dataset** | **str** | Output only. The name of dataset to be labeled. \&quot;projects/*/datasets/*\&quot; | [optional] 
**image_bounding_box_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata.md) |  | [optional] 
**image_bounding_poly_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata.md) |  | [optional] 
**image_classification_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata.md) |  | [optional] 
**image_oriented_bounding_box_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata.md) |  | [optional] 
**image_polyline_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata.md) |  | [optional] 
**image_segmentation_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata.md) |  | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial failures encountered. E.g. single files that couldn&#39;t be read. Status details field will contain standard GCP error details. | [optional] 
**progress_percent** | **int** | Output only. Progress of label operation. Range: [0, 100]. | [optional] 
**text_classification_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata.md) |  | [optional] 
**text_entity_extraction_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata.md) |  | [optional] 
**video_classification_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata.md) |  | [optional] 
**video_event_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata.md) |  | [optional] 
**video_object_detection_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata.md) |  | [optional] 
**video_object_tracking_details** | [**GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata**](GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p1alpha1_label_operation_metadata import GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata from a JSON string
google_cloud_datalabeling_v1p1alpha1_label_operation_metadata_instance = GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p1alpha1_label_operation_metadata_dict = google_cloud_datalabeling_v1p1alpha1_label_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata from a dict
google_cloud_datalabeling_v1p1alpha1_label_operation_metadata_from_dict = GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata.from_dict(google_cloud_datalabeling_v1p1alpha1_label_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


