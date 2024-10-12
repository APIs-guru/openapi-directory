# GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams

Prediction model parameters for Video Classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The Model only returns predictions with at least this confidence score. Default value is 0.0 | [optional] 
**max_predictions** | **int** | The Model only returns up to that many top, by confidence score, predictions per instance. If this number is very high, the Model may return fewer predictions. Default value is 10,000. | [optional] 
**one_sec_interval_classification** | **bool** | Set to true to request classification for a video at one-second intervals. Vertex AI returns labels and their confidence scores for each second of the entire time segment of the video that user specified in the input WARNING: Model evaluation is not done for this classification type, the quality of it depends on the training data, but there are no metrics provided to describe that quality. Default value is false | [optional] 
**segment_classification** | **bool** | Set to true to request segment-level classification. Vertex AI returns labels and their confidence scores for the entire time segment of the video that user specified in the input instance. Default value is true | [optional] 
**shot_classification** | **bool** | Set to true to request shot-level classification. Vertex AI determines the boundaries for each camera shot in the entire time segment of the video that user specified in the input instance. Vertex AI then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on the training data, but there are no metrics provided to describe that quality. Default value is false | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params import GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams from a JSON string
google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params_instance = GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params_dict = google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams from a dict
google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params_from_dict = GoogleCloudAiplatformV1SchemaPredictParamsVideoClassificationPredictionParams.from_dict(google_cloud_aiplatform_v1_schema_predict_params_video_classification_prediction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


