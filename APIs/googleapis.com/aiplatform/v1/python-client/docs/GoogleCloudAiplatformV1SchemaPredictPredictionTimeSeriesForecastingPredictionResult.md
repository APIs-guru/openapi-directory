# GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult

Prediction output format for Time Series Forecasting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantile_predictions** | **List[float]** | Quantile predictions, in 1-1 correspondence with quantile_values. | [optional] 
**quantile_values** | **List[float]** | Quantile values. | [optional] 
**tft_feature_importance** | [**GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance**](GoogleCloudAiplatformV1SchemaPredictPredictionTftFeatureImportance.md) |  | [optional] 
**value** | **float** | The regression value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result import GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult from a JSON string
google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result_instance = GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result_dict = google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult from a dict
google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result_from_dict = GoogleCloudAiplatformV1SchemaPredictPredictionTimeSeriesForecastingPredictionResult.from_dict(google_cloud_aiplatform_v1_schema_predict_prediction_time_series_forecasting_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


