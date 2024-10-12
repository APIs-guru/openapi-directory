# TextExtractionEvaluationMetrics

Model evaluation metrics for text extraction problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**au_prc** | **float** | Output only. The Area under precision recall curve metric. | [optional] 
**confidence_metrics_entries** | [**List[TextExtractionEvaluationMetricsConfidenceMetricsEntry]**](TextExtractionEvaluationMetricsConfidenceMetricsEntry.md) | Output only. Metrics that have confidence thresholds. Precision-recall curve can be derived from it. | [optional] 

## Example

```python
from openapi_client.models.text_extraction_evaluation_metrics import TextExtractionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TextExtractionEvaluationMetrics from a JSON string
text_extraction_evaluation_metrics_instance = TextExtractionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(TextExtractionEvaluationMetrics.to_json())

# convert the object into a dict
text_extraction_evaluation_metrics_dict = text_extraction_evaluation_metrics_instance.to_dict()
# create an instance of TextExtractionEvaluationMetrics from a dict
text_extraction_evaluation_metrics_from_dict = TextExtractionEvaluationMetrics.from_dict(text_extraction_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


