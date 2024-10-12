# XPSVideoActionMetricsEntry

The Evaluation metrics entry given a specific precision_window_length.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[XPSVideoActionMetricsEntryConfidenceMetricsEntry]**](XPSVideoActionMetricsEntryConfidenceMetricsEntry.md) | Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. | [optional] 
**mean_average_precision** | **float** | The mean average precision. | [optional] 
**precision_window_length** | **str** | This VideoActionMetricsEntry is calculated based on this prediction window length. If the predicted action&#39;s timestamp is inside the time window whose center is the ground truth action&#39;s timestamp with this specific length, the prediction result is treated as a true positive. | [optional] 

## Example

```python
from openapi_client.models.xps_video_action_metrics_entry import XPSVideoActionMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoActionMetricsEntry from a JSON string
xps_video_action_metrics_entry_instance = XPSVideoActionMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSVideoActionMetricsEntry.to_json())

# convert the object into a dict
xps_video_action_metrics_entry_dict = xps_video_action_metrics_entry_instance.to_dict()
# create an instance of XPSVideoActionMetricsEntry from a dict
xps_video_action_metrics_entry_from_dict = XPSVideoActionMetricsEntry.from_dict(xps_video_action_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


