# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationAutoTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationAutoTransformation.md) |  | [optional] 
**categorical** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationCategoricalTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationCategoricalTransformation.md) |  | [optional] 
**numeric** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericTransformation.md) |  | [optional] 
**repeated_categorical** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationCategoricalArrayTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationCategoricalArrayTransformation.md) |  | [optional] 
**repeated_numeric** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation.md) |  | [optional] 
**repeated_text** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextArrayTransformation.md) |  | [optional] 
**text** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTextTransformation.md) |  | [optional] 
**timestamp** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTimestampTransformation**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationTimestampTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


