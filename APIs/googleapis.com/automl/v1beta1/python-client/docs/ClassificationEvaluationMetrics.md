# ClassificationEvaluationMetrics

Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of \"segment_classification\" type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **List[str]** | Output only. The annotation spec ids used for this evaluation. | [optional] 
**au_prc** | **float** | Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation. | [optional] 
**au_roc** | **float** | Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. | [optional] 
**base_au_prc** | **float** | Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated. | [optional] 
**confidence_metrics_entry** | [**List[ClassificationEvaluationMetricsConfidenceMetricsEntry]**](ClassificationEvaluationMetricsConfidenceMetricsEntry.md) | Output only. Metrics for each confidence_threshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and position_threshold &#x3D; INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of position_threshold, but from these no aggregated metrics are computed. | [optional] 
**confusion_matrix** | [**ConfusionMatrix**](ConfusionMatrix.md) |  | [optional] 
**log_loss** | **float** | Output only. The Log Loss metric. | [optional] 

## Example

```python
from openapi_client.models.classification_evaluation_metrics import ClassificationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationEvaluationMetrics from a JSON string
classification_evaluation_metrics_instance = ClassificationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(ClassificationEvaluationMetrics.to_json())

# convert the object into a dict
classification_evaluation_metrics_dict = classification_evaluation_metrics_instance.to_dict()
# create an instance of ClassificationEvaluationMetrics from a dict
classification_evaluation_metrics_from_dict = ClassificationEvaluationMetrics.from_dict(classification_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


