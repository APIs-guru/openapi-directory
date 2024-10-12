# XPSTranslationEvaluationMetrics

Evaluation metrics for the dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_bleu_score** | **float** | BLEU score for base model. | [optional] 
**bleu_score** | **float** | BLEU score. | [optional] 

## Example

```python
from openapi_client.models.xps_translation_evaluation_metrics import XPSTranslationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTranslationEvaluationMetrics from a JSON string
xps_translation_evaluation_metrics_instance = XPSTranslationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTranslationEvaluationMetrics.to_json())

# convert the object into a dict
xps_translation_evaluation_metrics_dict = xps_translation_evaluation_metrics_instance.to_dict()
# create an instance of XPSTranslationEvaluationMetrics from a dict
xps_translation_evaluation_metrics_from_dict = XPSTranslationEvaluationMetrics.from_dict(xps_translation_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


