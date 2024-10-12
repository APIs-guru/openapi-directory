# XPSSpeechEvaluationMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_model_evaluation_metrics** | [**List[XPSSpeechEvaluationMetricsSubModelEvaluationMetric]**](XPSSpeechEvaluationMetricsSubModelEvaluationMetric.md) | Evaluation metrics for all submodels contained in this model. | [optional] 

## Example

```python
from openapi_client.models.xps_speech_evaluation_metrics import XPSSpeechEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechEvaluationMetrics from a JSON string
xps_speech_evaluation_metrics_instance = XPSSpeechEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechEvaluationMetrics.to_json())

# convert the object into a dict
xps_speech_evaluation_metrics_dict = xps_speech_evaluation_metrics_instance.to_dict()
# create an instance of XPSSpeechEvaluationMetrics from a dict
xps_speech_evaluation_metrics_from_dict = XPSSpeechEvaluationMetrics.from_dict(xps_speech_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


