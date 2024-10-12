# GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics

Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_mean_average_precision** | **float** | The single metric for bounding boxes evaluation: the &#x60;meanAveragePrecision&#x60; averaged over all &#x60;boundingBoxMetrics&#x60;. | [optional] 
**bounding_box_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsBoundingBoxMetrics]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsBoundingBoxMetrics.md) | The bounding boxes match metrics for each intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. | [optional] 
**evaluated_bounding_box_count** | **int** | UNIMPLEMENTED. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had. | [optional] 
**evaluated_frame_count** | **int** | UNIMPLEMENTED. The number of video frames used to create this evaluation. | [optional] 
**evaluated_track_count** | **int** | UNIMPLEMENTED. The total number of tracks (i.e. as seen across all frames) the ground truth used to create this evaluation had. | [optional] 
**track_mean_average_precision** | **float** | UNIMPLEMENTED. The single metric for tracks accuracy evaluation: the &#x60;meanAveragePrecision&#x60; averaged over all &#x60;trackMetrics&#x60;. | [optional] 
**track_mean_bounding_box_iou** | **float** | UNIMPLEMENTED. The single metric for tracks bounding box iou evaluation: the &#x60;meanBoundingBoxIou&#x60; averaged over all &#x60;trackMetrics&#x60;. | [optional] 
**track_mean_mismatch_rate** | **float** | UNIMPLEMENTED. The single metric for tracking consistency evaluation: the &#x60;meanMismatchRate&#x60; averaged over all &#x60;trackMetrics&#x60;. | [optional] 
**track_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetrics]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetrics.md) | UNIMPLEMENTED. The tracks match metrics for each intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoObjectTrackingMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_object_tracking_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


