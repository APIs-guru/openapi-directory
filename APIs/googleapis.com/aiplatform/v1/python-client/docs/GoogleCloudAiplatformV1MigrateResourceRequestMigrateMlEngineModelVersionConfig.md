# GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig

Config for migrating version in ml.googleapis.com to Vertex AI's Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Required. The ml.googleapis.com endpoint that this model version should be migrated from. Example values: * ml.googleapis.com * us-centrall-ml.googleapis.com * europe-west4-ml.googleapis.com * asia-east1-ml.googleapis.com | [optional] 
**model_display_name** | **str** | Required. Display name of the model in Vertex AI. System will pick a display name if unspecified. | [optional] 
**model_version** | **str** | Required. Full resource name of ml engine model version. Format: &#x60;projects/{project}/models/{model}/versions/{version}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config import GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig from a JSON string
google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config_instance = GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config_dict = google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig from a dict
google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config_from_dict = GoogleCloudAiplatformV1MigrateResourceRequestMigrateMlEngineModelVersionConfig.from_dict(google_cloud_aiplatform_v1_migrate_resource_request_migrate_ml_engine_model_version_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


