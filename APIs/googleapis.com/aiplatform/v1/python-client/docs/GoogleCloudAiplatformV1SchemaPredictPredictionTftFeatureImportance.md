# GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_columns** | **List[str]** |  | [optional] 
**attribute_weights** | **List[float]** |  | [optional] 
**context_columns** | **List[str]** |  | [optional] 
**context_weights** | **List[float]** | TFT feature importance values. Each pair for {context/horizon/attribute} should have the same shape since the weight corresponds to the column names. | [optional] 
**horizon_columns** | **List[str]** |  | [optional] 
**horizon_weights** | **List[float]** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance import GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance from a JSON string
google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance_instance = GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance_dict = google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance from a dict
google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance_from_dict = GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance.from_dict(google_cloud_aiplatform_v1_schema_predict_prediction_tft_feature_importance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


