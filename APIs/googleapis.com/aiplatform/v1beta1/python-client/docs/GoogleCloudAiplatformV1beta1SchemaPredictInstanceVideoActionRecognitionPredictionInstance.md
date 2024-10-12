# GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance

Prediction input format for Video Action Recognition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The Google Cloud Storage location of the video on which to perform the prediction. | [optional] 
**mime_type** | **str** | The MIME type of the content of the video. Only the following are supported: video/mp4 video/avi video/quicktime | [optional] 
**time_segment_end** | **str** | The end, exclusive, of the video&#39;s time segment on which to perform the prediction. Expressed as a number of seconds as measured from the start of the video, with \&quot;s\&quot; appended at the end. Fractions are allowed, up to a microsecond precision, and \&quot;inf\&quot; or \&quot;Infinity\&quot; is allowed, which means the end of the video. | [optional] 
**time_segment_start** | **str** | The beginning, inclusive, of the video&#39;s time segment on which to perform the prediction. Expressed as a number of seconds as measured from the start of the video, with \&quot;s\&quot; appended at the end. Fractions are allowed, up to a microsecond precision. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance import GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance_instance = GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance_dict = google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance from a dict
google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictInstanceVideoActionRecognitionPredictionInstance.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_instance_video_action_recognition_prediction_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


