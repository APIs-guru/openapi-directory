# BoundingBoxMetricsEntryConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Output only. The confidence threshold value used to compute the metrics. | [optional] 
**f1_score** | **float** | Output only. The harmonic mean of recall and precision. | [optional] 
**precision** | **float** | Output only. Precision under the given confidence threshold. | [optional] 
**recall** | **float** | Output only. Recall under the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.bounding_box_metrics_entry_confidence_metrics_entry import BoundingBoxMetricsEntryConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BoundingBoxMetricsEntryConfidenceMetricsEntry from a JSON string
bounding_box_metrics_entry_confidence_metrics_entry_instance = BoundingBoxMetricsEntryConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(BoundingBoxMetricsEntryConfidenceMetricsEntry.to_json())

# convert the object into a dict
bounding_box_metrics_entry_confidence_metrics_entry_dict = bounding_box_metrics_entry_confidence_metrics_entry_instance.to_dict()
# create an instance of BoundingBoxMetricsEntryConfidenceMetricsEntry from a dict
bounding_box_metrics_entry_confidence_metrics_entry_from_dict = BoundingBoxMetricsEntryConfidenceMetricsEntry.from_dict(bounding_box_metrics_entry_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


