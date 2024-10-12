# XPSTablesConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The confidence threshold value used to compute the metrics. | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. (2 * precision * recall) / (precision + recall) | [optional] 
**false_negative_count** | **str** | False negative count. | [optional] 
**false_positive_count** | **str** | False positive count. | [optional] 
**false_positive_rate** | **float** | FPR &#x3D; #false positives / (#false positives + #true negatives) | [optional] 
**precision** | **float** | Precision &#x3D; #true positives / (#true positives + #false positives). | [optional] 
**recall** | **float** | Recall &#x3D; #true positives / (#true positives + #false negatives). | [optional] 
**true_negative_count** | **str** | True negative count. | [optional] 
**true_positive_count** | **str** | True positive count. | [optional] 
**true_positive_rate** | **float** | TPR &#x3D; #true positives / (#true positives + #false negatvies) | [optional] 

## Example

```python
from openapi_client.models.xps_tables_confidence_metrics_entry import XPSTablesConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesConfidenceMetricsEntry from a JSON string
xps_tables_confidence_metrics_entry_instance = XPSTablesConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSTablesConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_tables_confidence_metrics_entry_dict = xps_tables_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSTablesConfidenceMetricsEntry from a dict
xps_tables_confidence_metrics_entry_from_dict = XPSTablesConfidenceMetricsEntry.from_dict(xps_tables_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


