# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation

Treats the column as numerical array and performs following transformation functions. * All transformations for Numerical types applied to the average of the all elements. * The average of empty arrays is treated as zero.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 
**invalid_values_allowed** | **bool** | If invalid values is allowed, the training pipeline will create a boolean feature that indicated whether the value is valid. Otherwise, the training pipeline will discard the input row from trainining data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformationNumericArrayTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_tables_inputs_transformation_numeric_array_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


