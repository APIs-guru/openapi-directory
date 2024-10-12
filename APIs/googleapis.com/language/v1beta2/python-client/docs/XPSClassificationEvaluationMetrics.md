# XPSClassificationEvaluationMetrics

Model evaluation metrics for classification problems. It can be used for image and video classification. Next tag: 9.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**au_prc** | **float** | The Area under precision recall curve metric. | [optional] 
**au_roc** | **float** | The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. | [optional] 
**base_au_prc** | **float** | The Area under precision recall curve metric based on priors. | [optional] 
**confidence_metrics_entries** | [**List[XPSConfidenceMetricsEntry]**](XPSConfidenceMetricsEntry.md) | Metrics that have confidence thresholds. Precision-recall curve can be derived from it. | [optional] 
**confusion_matrix** | [**XPSConfusionMatrix**](XPSConfusionMatrix.md) |  | [optional] 
**evaluated_examples_count** | **int** | The number of examples used for model evaluation. | [optional] 
**log_loss** | **float** | The Log Loss metric. | [optional] 

## Example

```python
from openapi_client.models.xps_classification_evaluation_metrics import XPSClassificationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSClassificationEvaluationMetrics from a JSON string
xps_classification_evaluation_metrics_instance = XPSClassificationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSClassificationEvaluationMetrics.to_json())

# convert the object into a dict
xps_classification_evaluation_metrics_dict = xps_classification_evaluation_metrics_instance.to_dict()
# create an instance of XPSClassificationEvaluationMetrics from a dict
xps_classification_evaluation_metrics_from_dict = XPSClassificationEvaluationMetrics.from_dict(xps_classification_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


