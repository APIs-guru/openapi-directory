# GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset

Represents one AnnotatedDataset in datalabeling.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Full resource name of data labeling AnnotatedDataset. Format: &#x60;projects/{project}/datasets/{dataset}/annotatedDatasets/{annotated_dataset}&#x60;. | [optional] 
**annotated_dataset_display_name** | **str** | The AnnotatedDataset&#39;s display name in datalabeling.googleapis.com. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset import GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset from a JSON string
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset_instance = GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset_dict = google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset from a dict
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset_from_dict = GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset.from_dict(google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_data_labeling_annotated_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


