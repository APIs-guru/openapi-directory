# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata

Model metadata specific to AutoML Tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_data_items_bigquery_uri** | **str** | BigQuery destination uri for exported evaluated examples. | [optional] 
**train_cost_milli_node_hours** | **str** | Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesMetadata.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


