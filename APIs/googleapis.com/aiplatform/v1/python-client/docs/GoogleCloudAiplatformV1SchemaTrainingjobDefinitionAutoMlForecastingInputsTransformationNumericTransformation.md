# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation

Training pipeline will perform following transformation functions. * The value converted to float32. * The z_score of the value. * log(value+1) when the value is greater than or equal to 0. Otherwise, this transformation is not applied and the value is considered a missing value. * z_score of log(value+1) when the value is greater than or equal to 0. Otherwise, this transformation is not applied and the value is considered a missing value. * A boolean value that indicates whether the value is valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformationNumericTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_forecasting_inputs_transformation_numeric_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


