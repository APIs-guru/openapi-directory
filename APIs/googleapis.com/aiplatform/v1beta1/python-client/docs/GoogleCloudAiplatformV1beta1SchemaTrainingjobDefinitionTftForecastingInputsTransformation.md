# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationAutoTransformation**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationAutoTransformation.md) |  | [optional] 
**categorical** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation.md) |  | [optional] 
**numeric** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationNumericTransformation**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationNumericTransformation.md) |  | [optional] 
**text** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationTextTransformation**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationTextTransformation.md) |  | [optional] 
**timestamp** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationTimestampTransformation**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationTimestampTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformation.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


