# XPSVideoObjectTrackingEvaluationMetrics

Model evaluation metrics for ObjectTracking problems. Next tag: 10.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_mean_average_precision** | **float** | Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. | [optional] 
**bounding_box_metrics_entries** | [**List[XPSBoundingBoxMetricsEntry]**](XPSBoundingBoxMetricsEntry.md) | Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. | [optional] 
**evaluated_boundingbox_count** | **int** | The number of bounding boxes used for model evaluation. | [optional] 
**evaluated_frame_count** | **int** | The number of video frames used for model evaluation. | [optional] 
**evaluated_track_count** | **int** | The number of tracks used for model evaluation. | [optional] 
**track_mean_average_precision** | **float** | Output only. The single metric for tracks accuracy evaluation: the mean_average_precision averaged over all track_metrics_entries. | [optional] 
**track_mean_bounding_box_iou** | **float** | Output only. The single metric for tracks bounding box iou evaluation: the mean_bounding_box_iou averaged over all track_metrics_entries. | [optional] 
**track_mean_mismatch_rate** | **float** | Output only. The single metric for tracking consistency evaluation: the mean_mismatch_rate averaged over all track_metrics_entries. | [optional] 
**track_metrics_entries** | [**List[XPSTrackMetricsEntry]**](XPSTrackMetricsEntry.md) | Output only. The tracks match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. | [optional] 

## Example

```python
from openapi_client.models.xps_video_object_tracking_evaluation_metrics import XPSVideoObjectTrackingEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoObjectTrackingEvaluationMetrics from a JSON string
xps_video_object_tracking_evaluation_metrics_instance = XPSVideoObjectTrackingEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSVideoObjectTrackingEvaluationMetrics.to_json())

# convert the object into a dict
xps_video_object_tracking_evaluation_metrics_dict = xps_video_object_tracking_evaluation_metrics_instance.to_dict()
# create an instance of XPSVideoObjectTrackingEvaluationMetrics from a dict
xps_video_object_tracking_evaluation_metrics_from_dict = XPSVideoObjectTrackingEvaluationMetrics.from_dict(xps_video_object_tracking_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


