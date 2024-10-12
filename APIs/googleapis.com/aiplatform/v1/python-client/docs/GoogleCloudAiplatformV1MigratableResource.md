# GoogleCloudAiplatformV1MigratableResource

Represents one resource that exists in automl.googleapis.com, datalabeling.googleapis.com or ml.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automl_dataset** | [**GoogleCloudAiplatformV1MigratableResourceAutomlDataset**](GoogleCloudAiplatformV1MigratableResourceAutomlDataset.md) |  | [optional] 
**automl_model** | [**GoogleCloudAiplatformV1MigratableResourceAutomlModel**](GoogleCloudAiplatformV1MigratableResourceAutomlModel.md) |  | [optional] 
**data_labeling_dataset** | [**GoogleCloudAiplatformV1MigratableResourceDataLabelingDataset**](GoogleCloudAiplatformV1MigratableResourceDataLabelingDataset.md) |  | [optional] 
**last_migrate_time** | **str** | Output only. Timestamp when the last migration attempt on this MigratableResource started. Will not be set if there&#39;s no migration attempt on this MigratableResource. | [optional] [readonly] 
**last_update_time** | **str** | Output only. Timestamp when this MigratableResource was last updated. | [optional] [readonly] 
**ml_engine_model_version** | [**GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion**](GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_migratable_resource import GoogleCloudAiplatformV1MigratableResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MigratableResource from a JSON string
google_cloud_aiplatform_v1_migratable_resource_instance = GoogleCloudAiplatformV1MigratableResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MigratableResource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_migratable_resource_dict = google_cloud_aiplatform_v1_migratable_resource_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MigratableResource from a dict
google_cloud_aiplatform_v1_migratable_resource_from_dict = GoogleCloudAiplatformV1MigratableResource.from_dict(google_cloud_aiplatform_v1_migratable_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


