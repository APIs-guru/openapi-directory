# GoogleCloudAiplatformV1MigratableResourceAutomlDataset

Represents one Dataset in automl.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Full resource name of automl Dataset. Format: &#x60;projects/{project}/locations/{location}/datasets/{dataset}&#x60;. | [optional] 
**dataset_display_name** | **str** | The Dataset&#39;s display name in automl.googleapis.com. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_migratable_resource_automl_dataset import GoogleCloudAiplatformV1MigratableResourceAutomlDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MigratableResourceAutomlDataset from a JSON string
google_cloud_aiplatform_v1_migratable_resource_automl_dataset_instance = GoogleCloudAiplatformV1MigratableResourceAutomlDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MigratableResourceAutomlDataset.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_migratable_resource_automl_dataset_dict = google_cloud_aiplatform_v1_migratable_resource_automl_dataset_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MigratableResourceAutomlDataset from a dict
google_cloud_aiplatform_v1_migratable_resource_automl_dataset_from_dict = GoogleCloudAiplatformV1MigratableResourceAutomlDataset.from_dict(google_cloud_aiplatform_v1_migratable_resource_automl_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


