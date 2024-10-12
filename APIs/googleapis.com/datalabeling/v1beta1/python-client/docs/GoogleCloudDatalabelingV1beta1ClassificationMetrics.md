# GoogleCloudDatalabelingV1beta1ClassificationMetrics

Metrics calculated for a classification model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confusion_matrix** | [**GoogleCloudDatalabelingV1beta1ConfusionMatrix**](GoogleCloudDatalabelingV1beta1ConfusionMatrix.md) |  | [optional] 
**pr_curve** | [**GoogleCloudDatalabelingV1beta1PrCurve**](GoogleCloudDatalabelingV1beta1PrCurve.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_classification_metrics import GoogleCloudDatalabelingV1beta1ClassificationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ClassificationMetrics from a JSON string
google_cloud_datalabeling_v1beta1_classification_metrics_instance = GoogleCloudDatalabelingV1beta1ClassificationMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ClassificationMetrics.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_classification_metrics_dict = google_cloud_datalabeling_v1beta1_classification_metrics_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ClassificationMetrics from a dict
google_cloud_datalabeling_v1beta1_classification_metrics_from_dict = GoogleCloudDatalabelingV1beta1ClassificationMetrics.from_dict(google_cloud_datalabeling_v1beta1_classification_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


