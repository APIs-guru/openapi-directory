# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting

A TrainingJob that trains and uploads an AutoML Forecasting Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputs**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputs.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingMetadata**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecasting.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


