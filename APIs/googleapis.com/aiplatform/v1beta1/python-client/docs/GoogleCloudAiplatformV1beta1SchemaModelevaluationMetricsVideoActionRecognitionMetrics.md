# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics

Model evaluation metrics for video action recognition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_action_count** | **int** | The number of ground truth actions used to create this evaluation. | [optional] 
**video_action_metrics** | [**List[GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetrics]**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionMetrics.md) | The metric entries for precision window lengths: 1s,2s,3s. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsVideoActionRecognitionMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_video_action_recognition_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


