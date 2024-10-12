# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation

Treats the column as text array and performs following transformation functions. * Concatenate all text values in the array into a single text value using a space (\" \") as a delimiter, and then treat the result as a single text value. Apply the transformations for Text columns. * Empty arrays treated as an empty text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_text_array_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


