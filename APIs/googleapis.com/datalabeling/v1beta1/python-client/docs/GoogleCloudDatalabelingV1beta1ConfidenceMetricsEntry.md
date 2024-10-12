# GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label&#39;s score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve. | [optional] 
**f1_score** | **float** | Harmonic mean of recall and precision. | [optional] 
**f1_score_at1** | **float** | The harmonic mean of recall_at1 and precision_at1. | [optional] 
**f1_score_at5** | **float** | The harmonic mean of recall_at5 and precision_at5. | [optional] 
**precision** | **float** | Precision value. | [optional] 
**precision_at1** | **float** | Precision value for entries with label that has highest score. | [optional] 
**precision_at5** | **float** | Precision value for entries with label that has highest 5 scores. | [optional] 
**recall** | **float** | Recall value. | [optional] 
**recall_at1** | **float** | Recall value for entries with label that has highest score. | [optional] 
**recall_at5** | **float** | Recall value for entries with label that has highest 5 scores. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_confidence_metrics_entry import GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry from a JSON string
google_cloud_datalabeling_v1beta1_confidence_metrics_entry_instance = GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_confidence_metrics_entry_dict = google_cloud_datalabeling_v1beta1_confidence_metrics_entry_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry from a dict
google_cloud_datalabeling_v1beta1_confidence_metrics_entry_from_dict = GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry.from_dict(google_cloud_datalabeling_v1beta1_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


