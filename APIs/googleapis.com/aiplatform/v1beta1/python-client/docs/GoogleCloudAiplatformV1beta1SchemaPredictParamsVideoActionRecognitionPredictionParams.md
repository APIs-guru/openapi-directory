# GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams

Prediction model parameters for Video Action Recognition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The Model only returns predictions with at least this confidence score. Default value is 0.0 | [optional] 
**max_predictions** | **int** | The model only returns up to that many top, by confidence score, predictions per frame of the video. If this number is very high, the Model may return fewer predictions per frame. Default value is 50. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params import GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params_instance = GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params_dict = google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams from a dict
google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictParamsVideoActionRecognitionPredictionParams.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_params_video_action_recognition_prediction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


