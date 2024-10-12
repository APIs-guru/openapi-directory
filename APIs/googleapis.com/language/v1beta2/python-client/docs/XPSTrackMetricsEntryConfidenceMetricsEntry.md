# XPSTrackMetricsEntryConfidenceMetricsEntry

Metrics for a single confidence threshold. Next tag: 6.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_iou** | **float** | Output only. Bounding box intersection-over-union precision. Measures how well the bounding boxes overlap between each other (e.g. complete overlap or just barely above iou_threshold). | [optional] 
**confidence_threshold** | **float** | Output only. The confidence threshold value used to compute the metrics. | [optional] 
**mismatch_rate** | **float** | Output only. Mismatch rate, which measures the tracking consistency, i.e. correctness of instance ID continuity. | [optional] 
**tracking_precision** | **float** | Output only. Tracking precision. | [optional] 
**tracking_recall** | **float** | Output only. Tracking recall. | [optional] 

## Example

```python
from openapi_client.models.xps_track_metrics_entry_confidence_metrics_entry import XPSTrackMetricsEntryConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTrackMetricsEntryConfidenceMetricsEntry from a JSON string
xps_track_metrics_entry_confidence_metrics_entry_instance = XPSTrackMetricsEntryConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSTrackMetricsEntryConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_track_metrics_entry_confidence_metrics_entry_dict = xps_track_metrics_entry_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSTrackMetricsEntryConfidenceMetricsEntry from a dict
xps_track_metrics_entry_confidence_metrics_entry_from_dict = XPSTrackMetricsEntryConfidenceMetricsEntry.from_dict(xps_track_metrics_entry_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


