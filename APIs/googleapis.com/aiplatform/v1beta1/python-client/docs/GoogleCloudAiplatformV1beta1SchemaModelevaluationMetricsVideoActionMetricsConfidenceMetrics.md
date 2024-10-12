# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Output only. The confidence threshold value used to compute the metrics. | [optional] 
**f1_score** | **float** | Output only. The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Output only. Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Output only. Recall for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_metrics_confidence_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


