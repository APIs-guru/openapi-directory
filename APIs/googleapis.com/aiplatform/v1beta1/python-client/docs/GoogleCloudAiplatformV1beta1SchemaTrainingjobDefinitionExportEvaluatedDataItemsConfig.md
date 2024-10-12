# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig

Configuration for exporting test set predictions to a BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_bigquery_uri** | **str** | URI of desired destination BigQuery table. Expected format: &#x60;bq://{project_id}:{dataset_id}:{table}&#x60; If not specified, then results are exported to the following auto-created BigQuery table: &#x60;{project_id}:export_evaluated_examples_{model_name}_{yyyy_MM_dd&#39;T&#39;HH_mm_ss_SSS&#39;Z&#39;}.evaluated_examples&#x60; | [optional] 
**override_existing_table** | **bool** | If true and an export destination is specified, then the contents of the destination are overwritten. Otherwise, if the export destination already exists, then the export operation fails. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_export_evaluated_data_items_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


