# GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion

Represents one model Version in ml.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The ml.googleapis.com endpoint that this model Version currently lives in. Example values: * ml.googleapis.com * us-centrall-ml.googleapis.com * europe-west4-ml.googleapis.com * asia-east1-ml.googleapis.com | [optional] 
**version** | **str** | Full resource name of ml engine model Version. Format: &#x60;projects/{project}/models/{model}/versions/{version}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version import GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion from a JSON string
google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version_instance = GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version_dict = google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion from a dict
google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version_from_dict = GoogleCloudAiplatformV1MigratableResourceMlEngineModelVersion.from_dict(google_cloud_aiplatform_v1_migratable_resource_ml_engine_model_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


