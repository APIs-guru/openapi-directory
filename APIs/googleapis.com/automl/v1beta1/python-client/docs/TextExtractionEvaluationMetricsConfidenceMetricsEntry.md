# TextExtractionEvaluationMetricsConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return. | [optional] 
**f1_score** | **float** | Output only. The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Output only. Precision under the given confidence threshold. | [optional] 
**recall** | **float** | Output only. Recall under the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.text_extraction_evaluation_metrics_confidence_metrics_entry import TextExtractionEvaluationMetricsConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of TextExtractionEvaluationMetricsConfidenceMetricsEntry from a JSON string
text_extraction_evaluation_metrics_confidence_metrics_entry_instance = TextExtractionEvaluationMetricsConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(TextExtractionEvaluationMetricsConfidenceMetricsEntry.to_json())

# convert the object into a dict
text_extraction_evaluation_metrics_confidence_metrics_entry_dict = text_extraction_evaluation_metrics_confidence_metrics_entry_instance.to_dict()
# create an instance of TextExtractionEvaluationMetricsConfidenceMetricsEntry from a dict
text_extraction_evaluation_metrics_confidence_metrics_entry_from_dict = TextExtractionEvaluationMetricsConfidenceMetricsEntry.from_dict(text_extraction_evaluation_metrics_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


