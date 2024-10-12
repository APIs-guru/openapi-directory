# GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams

Prediction model parameters for Image Object Detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The Model only returns predictions with at least this confidence score. Default value is 0.0 | [optional] 
**max_predictions** | **int** | The Model only returns up to that many top, by confidence score, predictions per instance. Note that number of returned predictions is also limited by metadata&#39;s predictionsLimit. Default value is 10. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params import GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams from a JSON string
google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params_instance = GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params_dict = google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams from a dict
google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params_from_dict = GoogleCloudAiplatformV1SchemaPredictParamsImageObjectDetectionPredictionParams.from_dict(google_cloud_aiplatform_v1_schema_predict_params_image_object_detection_prediction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


