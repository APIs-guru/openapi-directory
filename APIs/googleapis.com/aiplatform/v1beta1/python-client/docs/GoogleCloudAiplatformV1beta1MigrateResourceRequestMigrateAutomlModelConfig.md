# GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig

Config for migrating Model in automl.googleapis.com to Vertex AI's Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Required. Full resource name of automl Model. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60;. | [optional] 
**model_display_name** | **str** | Optional. Display name of the model in Vertex AI. System will pick a display name if unspecified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config import GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig from a JSON string
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config_instance = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config_dict = google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig from a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config_from_dict = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateAutomlModelConfig.from_dict(google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_automl_model_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


