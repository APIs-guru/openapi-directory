# XPSTrackMetricsEntry

Track matching model metrics for a single track match threshold and multiple label match confidence thresholds. Next tag: 6.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[XPSTrackMetricsEntryConfidenceMetricsEntry]**](XPSTrackMetricsEntryConfidenceMetricsEntry.md) | Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. | [optional] 
**iou_threshold** | **float** | Output only. The intersection-over-union threshold value between bounding boxes across frames used to compute this metric entry. | [optional] 
**mean_bounding_box_iou** | **float** | Output only. The mean bounding box iou over all confidence thresholds. | [optional] 
**mean_mismatch_rate** | **float** | Output only. The mean mismatch rate over all confidence thresholds. | [optional] 
**mean_tracking_average_precision** | **float** | Output only. The mean average precision over all confidence thresholds. | [optional] 

## Example

```python
from openapi_client.models.xps_track_metrics_entry import XPSTrackMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTrackMetricsEntry from a JSON string
xps_track_metrics_entry_instance = XPSTrackMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSTrackMetricsEntry.to_json())

# convert the object into a dict
xps_track_metrics_entry_dict = xps_track_metrics_entry_instance.to_dict()
# create an instance of XPSTrackMetricsEntry from a dict
xps_track_metrics_entry_from_dict = XPSTrackMetricsEntry.from_dict(xps_track_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


