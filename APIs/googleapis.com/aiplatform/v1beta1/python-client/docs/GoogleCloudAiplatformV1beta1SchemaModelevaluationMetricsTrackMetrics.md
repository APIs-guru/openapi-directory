# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics

UNIMPLEMENTED. Track matching model metrics for a single track match threshold and multiple label match confidence thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics** | [**List[GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics]**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics.md) | Metrics for each label-match &#x60;confidenceThreshold&#x60; from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. | [optional] 
**iou_threshold** | **float** | The intersection-over-union threshold value between bounding boxes across frames used to compute this metric entry. | [optional] 
**mean_bounding_box_iou** | **float** | The mean bounding box iou over all confidence thresholds. | [optional] 
**mean_mismatch_rate** | **float** | The mean mismatch rate over all confidence thresholds. | [optional] 
**mean_tracking_average_precision** | **float** | The mean average precision over all confidence thresholds. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTrackMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_track_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


