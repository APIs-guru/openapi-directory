# GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig

Config for migrating Dataset in automl.googleapis.com to Vertex AI's Dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. Full resource name of automl Dataset. Format: &#x60;projects/{project}/locations/{location}/datasets/{dataset}&#x60;. | [optional] 
**dataset_display_name** | **str** | Required. Display name of the Dataset in Vertex AI. System will pick a display name if unspecified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config import GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig from a JSON string
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config_instance = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config_dict = google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig from a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config_from_dict = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig.from_dict(google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_dataset_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


