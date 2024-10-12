# GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_iou** | **float** | Bounding box intersection-over-union precision. Measures how well the bounding boxes overlap between each other (e.g. complete overlap or just barely above iou_threshold). | [optional] 
**confidence_threshold** | **float** | The confidence threshold value used to compute the metrics. | [optional] 
**mismatch_rate** | **float** | Mismatch rate, which measures the tracking consistency, i.e. correctness of instance ID continuity. | [optional] 
**tracking_precision** | **float** | Tracking precision. | [optional] 
**tracking_recall** | **float** | Tracking recall. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsTrackMetricsConfidenceMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_track_metrics_confidence_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


