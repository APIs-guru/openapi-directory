# GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig

Config for migrating Dataset in datalabeling.googleapis.com to Vertex AI's Dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Required. Full resource name of data labeling Dataset. Format: &#x60;projects/{project}/datasets/{dataset}&#x60;. | [optional] 
**dataset_display_name** | **str** | Optional. Display name of the Dataset in Vertex AI. System will pick a display name if unspecified. | [optional] 
**migrate_data_labeling_annotated_dataset_configs** | [**List[GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig]**](GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig.md) | Optional. Configs for migrating AnnotatedDataset in datalabeling.googleapis.com to Vertex AI&#39;s SavedQuery. The specified AnnotatedDatasets have to belong to the datalabeling Dataset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config import GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig from a JSON string
google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config_instance = GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config_dict = google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig from a dict
google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config_from_dict = GoogleCloudAiplatformV1MigrateResourceRequestMigrateDataLabelingDatasetConfig.from_dict(google_cloud_aiplatform_v1_migrate_resource_request_migrate_data_labeling_dataset_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


