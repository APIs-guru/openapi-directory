# GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig

Config for migrating AnnotatedDataset in datalabeling.googleapis.com to Vertex AI's SavedQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Required. Full resource name of data labeling AnnotatedDataset. Format: &#x60;projects/{project}/datasets/{dataset}/annotatedDatasets/{annotated_dataset}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config import GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig from a JSON string
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config_instance = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config_dict = google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig from a dict
google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config_from_dict = GoogleCloudAiplatformV1beta1MigrateResourceRequestMigrateDataLabelingDatasetConfigMigrateDataLabelingAnnotatedDatasetConfig.from_dict(google_cloud_aiplatform_v1beta1_migrate_resource_request_migrate_data_labeling_dataset_config_migrate_data_labeling_annotated_dataset_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


