# GoogleCloudAiplatformV1beta1MigrateResourceRequest

Config of migrating one resource from automl.googleapis.com, datalabeling.googleapis.com and ml.googleapis.com to Vertex AI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrate_automl_dataset_config** | [**GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig**](GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlDatasetConfig.md) |  | [optional] 
**migrate_automl_model_config** | [**GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig**](GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig.md) |  | [optional] 
**migrate_data_labeling_dataset_config** | [**GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfig**](GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfig.md) |  | [optional] 
**migrate_ml_engine_model_version_config** | [**GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateMlEngineModelVersionConfig**](GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateMlEngineModelVersionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migrate_resource_request import GoogleCloudAiplatformV1beta1MigrateResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequest from a JSON string
google_cloud_aiplatform_v1beta1_migrate_resource_request_instance = GoogleCloudAiplatformV1beta1MigrateResourceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigrateResourceRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_dict = google_cloud_aiplatform_v1beta1_migrate_resource_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequest from a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_from_dict = GoogleCloudAiplatformV1beta1MigrateResourceRequest.from_dict(google_cloud_aiplatform_v1beta1_migrate_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


