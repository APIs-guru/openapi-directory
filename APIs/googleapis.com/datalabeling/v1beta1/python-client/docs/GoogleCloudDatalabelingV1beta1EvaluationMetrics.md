# GoogleCloudDatalabelingV1beta1EvaluationMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_metrics** | [**GoogleCloudDatalabelingV1beta1ClassificationMetrics**](GoogleCloudDatalabelingV1beta1ClassificationMetrics.md) |  | [optional] 
**object_detection_metrics** | [**GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics**](GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation_metrics import GoogleCloudDatalabelingV1beta1EvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationMetrics from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_metrics_instance = GoogleCloudDatalabelingV1beta1EvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1EvaluationMetrics.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_metrics_dict = google_cloud_datalabeling_v1beta1_evaluation_metrics_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationMetrics from a dict
google_cloud_datalabeling_v1beta1_evaluation_metrics_from_dict = GoogleCloudDatalabelingV1beta1EvaluationMetrics.from_dict(google_cloud_datalabeling_v1beta1_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


