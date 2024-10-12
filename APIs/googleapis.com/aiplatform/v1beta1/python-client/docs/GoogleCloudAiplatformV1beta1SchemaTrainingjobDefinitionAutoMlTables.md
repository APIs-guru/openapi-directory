# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables

A TrainingJob that trains and uploads an AutoML Tables Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTables.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


