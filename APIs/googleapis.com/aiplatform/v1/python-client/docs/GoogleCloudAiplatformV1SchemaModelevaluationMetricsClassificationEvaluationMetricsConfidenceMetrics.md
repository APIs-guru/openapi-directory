# GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Metrics are computed with an assumption that the Model never returns predictions with score lower than this value. | [optional] 
**confusion_matrix** | [**GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix**](GoogleCloudAiplatformV1SchemaModelevaluationMetricsConfusionMatrix.md) |  | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. For summary metrics, it computes the micro-averaged F1 score. | [optional] 
**f1_score_at1** | **float** | The harmonic mean of recallAt1 and precisionAt1. | [optional] 
**f1_score_macro** | **float** | Macro-averaged F1 Score. | [optional] 
**f1_score_micro** | **float** | Micro-averaged F1 Score. | [optional] 
**false_negative_count** | **str** | The number of ground truth labels that are not matched by a Model created label. | [optional] 
**false_positive_count** | **str** | The number of Model created labels that do not match a ground truth label. | [optional] 
**false_positive_rate** | **float** | False Positive Rate for the given confidence threshold. | [optional] 
**false_positive_rate_at1** | **float** | The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each DataItem. | [optional] 
**max_predictions** | **int** | Metrics are computed with an assumption that the Model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the &#x60;confidenceThreshold&#x60;. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**precision_at1** | **float** | The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each DataItem. | [optional] 
**recall** | **float** | Recall (True Positive Rate) for the given confidence threshold. | [optional] 
**recall_at1** | **float** | The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each DataItem. | [optional] 
**true_negative_count** | **str** | The number of labels that were not created by the Model, but if they would, they would not match a ground truth label. | [optional] 
**true_positive_count** | **str** | The number of Model created labels that match a ground truth label. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics import GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics from a JSON string
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics_instance = GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics_dict = google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics from a dict
google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics_from_dict = GoogleCloudAiplatformV1SchemaModelevaluationMetricsClassificationEvaluationMetricsConfidenceMetrics.from_dict(google_cloud_aiplatform_v1_schema_modelevaluation_metrics_classification_evaluation_metrics_confidence_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


