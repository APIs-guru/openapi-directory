# XPSTextExtractionEvaluationMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_f1_confidence_metrics** | [**XPSConfidenceMetricsEntry**](XPSConfidenceMetricsEntry.md) |  | [optional] 
**confidence_metrics_entries** | [**List[XPSConfidenceMetricsEntry]**](XPSConfidenceMetricsEntry.md) | If the enclosing EvaluationMetrics.label is empty, confidence_metrics_entries is an evaluation of the entire model across all labels. If the enclosing EvaluationMetrics.label is set, confidence_metrics_entries applies to that label. | [optional] 
**confusion_matrix** | [**XPSConfusionMatrix**](XPSConfusionMatrix.md) |  | [optional] 
**per_label_confidence_metrics** | [**Dict[str, XPSConfidenceMetricsEntry]**](XPSConfidenceMetricsEntry.md) | Only recall, precision, and f1_score will be set. | [optional] 

## Example

```python
from openapi_client.models.xps_text_extraction_evaluation_metrics import XPSTextExtractionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTextExtractionEvaluationMetrics from a JSON string
xps_text_extraction_evaluation_metrics_instance = XPSTextExtractionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTextExtractionEvaluationMetrics.to_json())

# convert the object into a dict
xps_text_extraction_evaluation_metrics_dict = xps_text_extraction_evaluation_metrics_instance.to_dict()
# create an instance of XPSTextExtractionEvaluationMetrics from a dict
xps_text_extraction_evaluation_metrics_from_dict = XPSTextExtractionEvaluationMetrics.from_dict(xps_text_extraction_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


