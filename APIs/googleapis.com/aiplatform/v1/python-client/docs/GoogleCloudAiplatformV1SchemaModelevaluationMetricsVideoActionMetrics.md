# GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics

The Evaluation metrics given a specific precision_window_length.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetricsConfidenceMetrics.md) | Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. | [optional] 
**mean_average_precision** | **float** | The mean average precision. | [optional] 
**precision_window_length** | **str** | This VideoActionMetrics is calculated based on this prediction window length. If the predicted action&#39;s timestamp is inside the time window whose center is the ground truth action&#39;s timestamp with this specific length, the prediction result is treated as a true positive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsVideoActionMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_video_action_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


