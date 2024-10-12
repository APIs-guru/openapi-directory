# XPSVideoActionMetricsEntryConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Output only. The confidence threshold value used to compute the metrics. | [optional] 
**f1_score** | **float** | Output only. The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Output only. Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Output only. Recall for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.xps_video_action_metrics_entry_confidence_metrics_entry import XPSVideoActionMetricsEntryConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoActionMetricsEntryConfidenceMetricsEntry from a JSON string
xps_video_action_metrics_entry_confidence_metrics_entry_instance = XPSVideoActionMetricsEntryConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSVideoActionMetricsEntryConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_video_action_metrics_entry_confidence_metrics_entry_dict = xps_video_action_metrics_entry_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSVideoActionMetricsEntryConfidenceMetricsEntry from a dict
xps_video_action_metrics_entry_confidence_metrics_entry_from_dict = XPSVideoActionMetricsEntryConfidenceMetricsEntry.from_dict(xps_video_action_metrics_entry_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


