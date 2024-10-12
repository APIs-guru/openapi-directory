# GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics

Metrics for classification evaluation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**au_prc** | **float** | The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation. | [optional] 
**au_roc** | **float** | The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. | [optional] 
**confidence_metrics** | [**List[GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics]**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics.md) | Metrics for each &#x60;confidenceThreshold&#x60; in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and &#x60;positionThreshold&#x60; &#x3D; INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of &#x60;positionThreshold&#x60;, but from these no aggregated metrics are computed. | [optional] 
**confusion_matrix** | [**GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix.md) |  | [optional] 
**log_loss** | **float** | The Log Loss metric. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


