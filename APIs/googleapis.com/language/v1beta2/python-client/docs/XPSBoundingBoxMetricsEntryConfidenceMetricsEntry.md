# XPSBoundingBoxMetricsEntryConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The confidence threshold value used to compute the metrics. | [optional] 
**f1_score** | **float** | The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Recall for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.xps_bounding_box_metrics_entry_confidence_metrics_entry import XPSBoundingBoxMetricsEntryConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSBoundingBoxMetricsEntryConfidenceMetricsEntry from a JSON string
xps_bounding_box_metrics_entry_confidence_metrics_entry_instance = XPSBoundingBoxMetricsEntryConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSBoundingBoxMetricsEntryConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_bounding_box_metrics_entry_confidence_metrics_entry_dict = xps_bounding_box_metrics_entry_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSBoundingBoxMetricsEntryConfidenceMetricsEntry from a dict
xps_bounding_box_metrics_entry_confidence_metrics_entry_from_dict = XPSBoundingBoxMetricsEntryConfidenceMetricsEntry.from_dict(xps_bounding_box_metrics_entry_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


