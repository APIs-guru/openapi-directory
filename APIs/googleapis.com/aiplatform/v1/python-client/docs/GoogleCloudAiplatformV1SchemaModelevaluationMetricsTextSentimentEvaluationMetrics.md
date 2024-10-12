# GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics

Model evaluation metrics for text sentiment problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confusion_matrix** | [**GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix.md) |  | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. | [optional] 
**linear_kappa** | **float** | Linear weighted kappa. Only set for ModelEvaluations, not for ModelEvaluationSlices. | [optional] 
**mean_absolute_error** | **float** | Mean absolute error. Only set for ModelEvaluations, not for ModelEvaluationSlices. | [optional] 
**mean_squared_error** | **float** | Mean squared error. Only set for ModelEvaluations, not for ModelEvaluationSlices. | [optional] 
**precision** | **float** | Precision. | [optional] 
**quadratic_kappa** | **float** | Quadratic weighted kappa. Only set for ModelEvaluations, not for ModelEvaluationSlices. | [optional] 
**recall** | **float** | Recall. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsTextSentimentEvaluationMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_text_sentiment_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


