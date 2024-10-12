# BoundingBoxMetricsEntry

Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[BoundingBoxMetricsEntryConfidenceMetricsEntry]**](BoundingBoxMetricsEntryConfidenceMetricsEntry.md) | Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. | [optional] 
**iou_threshold** | **float** | Output only. The intersection-over-union threshold value used to compute this metrics entry. | [optional] 
**mean_average_precision** | **float** | Output only. The mean average precision, most often close to au_prc. | [optional] 

## Example

```python
from openapi_client.models.bounding_box_metrics_entry import BoundingBoxMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BoundingBoxMetricsEntry from a JSON string
bounding_box_metrics_entry_instance = BoundingBoxMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(BoundingBoxMetricsEntry.to_json())

# convert the object into a dict
bounding_box_metrics_entry_dict = bounding_box_metrics_entry_instance.to_dict()
# create an instance of BoundingBoxMetricsEntry from a dict
bounding_box_metrics_entry_from_dict = BoundingBoxMetricsEntry.from_dict(bounding_box_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


