# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation

Training pipeline will perform following transformation functions. * The value converted to float32. * The z_score of the value. * log(value+1) when the value is greater than or equal to 0. Otherwise, this transformation is not applied and the value is considered a missing value. * z_score of log(value+1) when the value is greater than or equal to 0. Otherwise, this transformation is not applied and the value is considered a missing value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationNumericTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_numeric_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


