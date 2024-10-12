# GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Metrics are computed with an assumption that the Model never returns predictions with score lower than this value. | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Recall (True Positive Rate) for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics import GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics from a JSON string
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics_instance = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics_dict = google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics from a dict
google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics_from_dict = GoogleCloudAiplatformV1beta1SchemaModelevaluationMetricsTextExtractionEvaluationMetricsConfidenceMetrics.from_dict(google_cloud_aiplatform_v1beta1_schema_modelevaluation_metrics_text_extraction_evaluation_metrics_confidence_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


