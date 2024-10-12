# TranslationEvaluationMetrics

Evaluation metrics for the dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_bleu_score** | **float** | Output only. BLEU score for base model. | [optional] 
**bleu_score** | **float** | Output only. BLEU score. | [optional] 

## Example

```python
from openapi_client.models.translation_evaluation_metrics import TranslationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationEvaluationMetrics from a JSON string
translation_evaluation_metrics_instance = TranslationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(TranslationEvaluationMetrics.to_json())

# convert the object into a dict
translation_evaluation_metrics_dict = translation_evaluation_metrics_instance.to_dict()
# create an instance of TranslationEvaluationMetrics from a dict
translation_evaluation_metrics_from_dict = TranslationEvaluationMetrics.from_dict(translation_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


