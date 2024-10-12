# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation

Training pipeline will perform following transformation functions. * The categorical string as is--no change to case, punctuation, spelling, tense, and so on. * Convert the category name to a dictionary lookup index and generate an embedding for each index. * Categories that appear less than 5 times in the training dataset are treated as the \"unknown\" category. The \"unknown\" category gets its own special lookup index and resulting embedding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionTftForecastingInputsTransformationCategoricalTransformation.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_tft_forecasting_inputs_transformation_categorical_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


