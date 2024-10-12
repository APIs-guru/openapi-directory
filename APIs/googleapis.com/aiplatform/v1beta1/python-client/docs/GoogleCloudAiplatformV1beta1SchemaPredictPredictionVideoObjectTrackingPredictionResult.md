# GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult

Prediction output format for Video Object Tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The Model&#39;s confidence in correction of this prediction, higher value means higher confidence. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that had been identified. | [optional] 
**frames** | [**List[GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame]**](GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResultFrame.md) | All of the frames of the video in which a single object instance has been detected. The bounding boxes in the frames identify the same object. | [optional] 
**id** | **str** | The resource ID of the AnnotationSpec that had been identified. | [optional] 
**time_segment_end** | **str** | The end, inclusive, of the video&#39;s time segment in which the object instance has been detected. Expressed as a number of seconds as measured from the start of the video, with fractions up to a microsecond precision, and with \&quot;s\&quot; appended at the end. | [optional] 
**time_segment_start** | **str** | The beginning, inclusive, of the video&#39;s time segment in which the object instance has been detected. Expressed as a number of seconds as measured from the start of the video, with fractions up to a microsecond precision, and with \&quot;s\&quot; appended at the end. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result import GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_instance = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_dict = google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult from a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictPredictionVideoObjectTrackingPredictionResult.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_prediction_video_object_tracking_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


