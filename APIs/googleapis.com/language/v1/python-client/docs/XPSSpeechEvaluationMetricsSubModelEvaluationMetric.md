# XPSSpeechEvaluationMetricsSubModelEvaluationMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biasing_model_type** | **str** | Type of the biasing model. | [optional] 
**is_enhanced_model** | **bool** | If true then it means we have an enhanced version of the biasing models. | [optional] 
**num_deletions** | **int** |  | [optional] 
**num_insertions** | **int** |  | [optional] 
**num_substitutions** | **int** |  | [optional] 
**num_utterances** | **int** | Number of utterances used in the wer computation. | [optional] 
**num_words** | **int** | Number of words over which the word error rate was computed. | [optional] 
**sentence_accuracy** | **float** | Below fields are used for debugging purposes | [optional] 
**wer** | **float** | Word error rate (standard error metric used for speech recognition). | [optional] 

## Example

```python
from openapi_client.models.xps_speech_evaluation_metrics_sub_model_evaluation_metric import XPSSpeechEvaluationMetricsSubModelEvaluationMetric

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechEvaluationMetricsSubModelEvaluationMetric from a JSON string
xps_speech_evaluation_metrics_sub_model_evaluation_metric_instance = XPSSpeechEvaluationMetricsSubModelEvaluationMetric.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechEvaluationMetricsSubModelEvaluationMetric.to_json())

# convert the object into a dict
xps_speech_evaluation_metrics_sub_model_evaluation_metric_dict = xps_speech_evaluation_metrics_sub_model_evaluation_metric_instance.to_dict()
# create an instance of XPSSpeechEvaluationMetricsSubModelEvaluationMetric from a dict
xps_speech_evaluation_metrics_sub_model_evaluation_metric_from_dict = XPSSpeechEvaluationMetricsSubModelEvaluationMetric.from_dict(xps_speech_evaluation_metrics_sub_model_evaluation_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


