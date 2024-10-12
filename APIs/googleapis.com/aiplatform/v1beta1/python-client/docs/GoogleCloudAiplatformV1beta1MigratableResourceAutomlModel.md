# GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel

Represents one Model in automl.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Full resource name of automl Model. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60;. | [optional] 
**model_display_name** | **str** | The Model&#39;s display name in automl.googleapis.com. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migratable_resource_automl_model import GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel from a JSON string
google_cloud_aiplatform_v1beta1_migratable_resource_automl_model_instance = GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migratable_resource_automl_model_dict = google_cloud_aiplatform_v1beta1_migratable_resource_automl_model_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel from a dict
google_cloud_aiplatform_v1beta1_migratable_resource_automl_model_from_dict = GoogleCloudAiplatformV1beta1MigratableResourceAutomlModel.from_dict(google_cloud_aiplatform_v1beta1_migratable_resource_automl_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


