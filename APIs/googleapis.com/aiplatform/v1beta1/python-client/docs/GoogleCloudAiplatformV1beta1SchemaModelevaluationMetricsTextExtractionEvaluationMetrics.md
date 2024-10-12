# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics

Metrics for text extraction evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics** | [**List[GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics]**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics.md) | Metrics that have confidence thresholds. Precision-recall curve can be derived from them. | [optional] 
**confusion_matrix** | [**GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsConfusionMatrix**](GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsConfusionMatrix.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


