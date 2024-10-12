# XPSBoundingBoxMetricsEntry

Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[XPSBoundingBoxMetricsEntryConfidenceMetricsEntry]**](XPSBoundingBoxMetricsEntryConfidenceMetricsEntry.md) | Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. | [optional] 
**iou_threshold** | **float** | The intersection-over-union threshold value used to compute this metrics entry. | [optional] 
**mean_average_precision** | **float** | The mean average precision. | [optional] 

## Example

```python
from openapi_client.models.xps_bounding_box_metrics_entry import XPSBoundingBoxMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSBoundingBoxMetricsEntry from a JSON string
xps_bounding_box_metrics_entry_instance = XPSBoundingBoxMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSBoundingBoxMetricsEntry.to_json())

# convert the object into a dict
xps_bounding_box_metrics_entry_dict = xps_bounding_box_metrics_entry_instance.to_dict()
# create an instance of XPSBoundingBoxMetricsEntry from a dict
xps_bounding_box_metrics_entry_from_dict = XPSBoundingBoxMetricsEntry.from_dict(xps_bounding_box_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


