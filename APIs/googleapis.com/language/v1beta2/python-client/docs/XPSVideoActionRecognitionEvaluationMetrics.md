# XPSVideoActionRecognitionEvaluationMetrics

Model evaluation metrics for video action recognition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_action_count** | **int** | Output only. The number of ground truth actions used to create this evaluation. | [optional] 
**video_action_metrics_entries** | [**List[XPSVideoActionMetricsEntry]**](XPSVideoActionMetricsEntry.md) | Output only. The metric entries for precision window lengths: 1s,2s,3s,4s, 5s. | [optional] 

## Example

```python
from openapi_client.models.xps_video_action_recognition_evaluation_metrics import XPSVideoActionRecognitionEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoActionRecognitionEvaluationMetrics from a JSON string
xps_video_action_recognition_evaluation_metrics_instance = XPSVideoActionRecognitionEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSVideoActionRecognitionEvaluationMetrics.to_json())

# convert the object into a dict
xps_video_action_recognition_evaluation_metrics_dict = xps_video_action_recognition_evaluation_metrics_instance.to_dict()
# create an instance of XPSVideoActionRecognitionEvaluationMetrics from a dict
xps_video_action_recognition_evaluation_metrics_from_dict = XPSVideoActionRecognitionEvaluationMetrics.from_dict(xps_video_action_recognition_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


