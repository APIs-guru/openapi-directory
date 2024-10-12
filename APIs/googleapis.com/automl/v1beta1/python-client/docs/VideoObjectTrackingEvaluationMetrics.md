# VideoObjectTrackingEvaluationMetrics

Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_mean_average_precision** | **float** | Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. | [optional] 
**bounding_box_metrics_entries** | [**List[BoundingBoxMetricsEntry]**](BoundingBoxMetricsEntry.md) | Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. | [optional] 
**evaluated_bounding_box_count** | **int** | Output only. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had. | [optional] 
**evaluated_frame_count** | **int** | Output only. The number of video frames used to create this evaluation. | [optional] 

## Example

```python
from openapi_client.models.video_object_tracking_evaluation_metrics import VideoObjectTrackingEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of VideoObjectTrackingEvaluationMetrics from a JSON string
video_object_tracking_evaluation_metrics_instance = VideoObjectTrackingEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(VideoObjectTrackingEvaluationMetrics.to_json())

# convert the object into a dict
video_object_tracking_evaluation_metrics_dict = video_object_tracking_evaluation_metrics_instance.to_dict()
# create an instance of VideoObjectTrackingEvaluationMetrics from a dict
video_object_tracking_evaluation_metrics_from_dict = VideoObjectTrackingEvaluationMetrics.from_dict(video_object_tracking_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


