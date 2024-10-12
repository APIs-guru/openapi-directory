# GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult

Prediction output format for Tabular Regression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_bound** | **float** | The lower bound of the prediction interval. | [optional] 
**quantile_predictions** | **List[float]** | Quantile predictions, in 1-1 correspondence with quantile_values. | [optional] 
**quantile_values** | **List[float]** | Quantile values. | [optional] 
**upper_bound** | **float** | The upper bound of the prediction interval. | [optional] 
**value** | **float** | The regression value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result import GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult from a JSON string
google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result_instance = GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result_dict = google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult from a dict
google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictPredictionTabularRegressionPredictionResult.from_dict(google_cloud_aiplatform_v1beta1_schema_predict_prediction_tabular_regression_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


