# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation

Training pipeline will perform following transformation functions. * The text as is--no change to case, punctuation, spelling, tense, and so on. * Tokenize text to words. Convert each words to a dictionary lookup index and generate an embedding for each index. Combine the embedding of all elements into a single embedding using the mean. * Tokenization is based on unicode script boundaries. * Missing values get their own lookup index and resulting embedding. * Stop-words receive no special treatment and are not removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


