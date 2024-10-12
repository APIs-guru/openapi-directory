# GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame

The fields `xMin`, `xMax`, `yMin`, and `yMax` refer to a bounding box, i.e. the rectangle over the video frame pinpointing the found AnnotationSpec. The coordinates are relative to the frame size, and the point 0,0 is in the top left of the frame.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_offset** | **str** | A time (frame) of a video in which the object has been detected. Expressed as a number of seconds as measured from the start of the video, with fractions up to a microsecond precision, and with \&quot;s\&quot; appended at the end. | [optional] 
**x_max** | **float** | The rightmost coordinate of the bounding box. | [optional] 
**x_min** | **float** | The leftmost coordinate of the bounding box. | [optional] 
**y_max** | **float** | The bottommost coordinate of the bounding box. | [optional] 
**y_min** | **float** | The topmost coordinate of the bounding box. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame import GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame_instance = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame_dict = google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame from a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


