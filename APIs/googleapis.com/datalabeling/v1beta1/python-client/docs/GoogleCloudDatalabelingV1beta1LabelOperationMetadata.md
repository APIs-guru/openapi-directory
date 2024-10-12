# GoogleCloudDatalabelingV1beta1LabelOperationMetadata

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Output only. The name of annotated dataset in format \&quot;projects/*/datasets/*/annotatedDatasets/*\&quot;. | [optional] 
**create_time** | **str** | Output only. Timestamp when labeling request was created. | [optional] 
**dataset** | **str** | Output only. The name of dataset to be labeled. \&quot;projects/*/datasets/*\&quot; | [optional] 
**image_bounding_box_details** | [**GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata.md) |  | [optional] 
**image_bounding_poly_details** | [**GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata.md) |  | [optional] 
**image_classification_details** | [**GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata.md) |  | [optional] 
**image_oriented_bounding_box_details** | [**GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata.md) |  | [optional] 
**image_polyline_details** | [**GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata.md) |  | [optional] 
**image_segmentation_details** | [**GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata.md) |  | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial failures encountered. E.g. single files that couldn&#39;t be read. Status details field will contain standard GCP error details. | [optional] 
**progress_percent** | **int** | Output only. Progress of label operation. Range: [0, 100]. | [optional] 
**text_classification_details** | [**GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata.md) |  | [optional] 
**text_entity_extraction_details** | [**GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata.md) |  | [optional] 
**video_classification_details** | [**GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata.md) |  | [optional] 
**video_event_details** | [**GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata.md) |  | [optional] 
**video_object_detection_details** | [**GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata.md) |  | [optional] 
**video_object_tracking_details** | [**GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata**](GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_label_operation_metadata import GoogleCloudDatalabelingV1beta1LabelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1LabelOperationMetadata from a JSON string
google_cloud_datalabeling_v1beta1_label_operation_metadata_instance = GoogleCloudDatalabelingV1beta1LabelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1LabelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_label_operation_metadata_dict = google_cloud_datalabeling_v1beta1_label_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1LabelOperationMetadata from a dict
google_cloud_datalabeling_v1beta1_label_operation_metadata_from_dict = GoogleCloudDatalabelingV1beta1LabelOperationMetadata.from_dict(google_cloud_datalabeling_v1beta1_label_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


