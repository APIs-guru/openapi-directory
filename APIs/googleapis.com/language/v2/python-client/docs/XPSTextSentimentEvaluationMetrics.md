# XPSTextSentimentEvaluationMetrics

Model evaluation metrics for text sentiment problems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confusion_matrix** | [**XPSConfusionMatrix**](XPSConfusionMatrix.md) |  | [optional] 
**f1_score** | **float** | Output only. The harmonic mean of recall and precision. | [optional] 
**linear_kappa** | **float** | Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. | [optional] 
**mean_absolute_error** | **float** | Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. | [optional] 
**mean_squared_error** | **float** | Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. | [optional] 
**precision** | **float** | Output only. Precision. | [optional] 
**quadratic_kappa** | **float** | Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. | [optional] 
**recall** | **float** | Output only. Recall. | [optional] 

## Example

```python
from openapi_client.models.xps_text_sentiment_evaluation_metrics import XPSTextSentimentEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTextSentimentEvaluationMetrics from a JSON string
xps_text_sentiment_evaluation_metrics_instance = XPSTextSentimentEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSTextSentimentEvaluationMetrics.to_json())

# convert the object into a dict
xps_text_sentiment_evaluation_metrics_dict = xps_text_sentiment_evaluation_metrics_instance.to_dict()
# create an instance of XPSTextSentimentEvaluationMetrics from a dict
xps_text_sentiment_evaluation_metrics_from_dict = XPSTextSentimentEvaluationMetrics.from_dict(xps_text_sentiment_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


