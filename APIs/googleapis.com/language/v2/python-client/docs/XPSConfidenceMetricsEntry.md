# XPSConfidenceMetricsEntry

ConfidenceMetricsEntry includes generic precision, recall, f1 score etc. Next tag: 16.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Metrics are computed with an assumption that the model never return predictions with score lower than this value. | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. | [optional] 
**f1_score_at1** | **float** | The harmonic mean of recall_at1 and precision_at1. | [optional] 
**false_negative_count** | **str** | The number of ground truth labels that are not matched by a model created label. | [optional] 
**false_positive_count** | **str** | The number of model created labels that do not match a ground truth label. | [optional] 
**false_positive_rate** | **float** | False Positive Rate for the given confidence threshold. | [optional] 
**false_positive_rate_at1** | **float** | The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example. | [optional] 
**position_threshold** | **int** | Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**precision_at1** | **float** | The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example. | [optional] 
**recall** | **float** | Recall (true positive rate) for the given confidence threshold. | [optional] 
**recall_at1** | **float** | The recall (true positive rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example. | [optional] 
**true_negative_count** | **str** | The number of labels that were not created by the model, but if they would, they would not match a ground truth label. | [optional] 
**true_positive_count** | **str** | The number of model created labels that match a ground truth label. | [optional] 

## Example

```python
from openapi_client.models.xps_confidence_metrics_entry import XPSConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSConfidenceMetricsEntry from a JSON string
xps_confidence_metrics_entry_instance = XPSConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_confidence_metrics_entry_dict = xps_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSConfidenceMetricsEntry from a dict
xps_confidence_metrics_entry_from_dict = XPSConfidenceMetricsEntry.from_dict(xps_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


