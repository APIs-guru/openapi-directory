# GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset

Represents one Dataset in datalabeling.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_labeling_annotated_datasets** | [**List[GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset]**](GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDatasetDataLabelingAnnotatedDataset.md) | The migratable AnnotatedDataset in datalabeling.googleapis.com belongs to the data labeling Dataset. | [optional] 
**dataset** | **str** | Full resource name of data labeling Dataset. Format: &#x60;projects/{project}/datasets/{dataset}&#x60;. | [optional] 
**dataset_display_name** | **str** | The Dataset&#39;s display name in datalabeling.googleapis.com. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset import GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset from a JSON string
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_instance = GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_dict = google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset from a dict
google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_from_dict = GoogleCloudAiplatformV1beta1MigratableResourceDataLabelingDataset.from_dict(google_cloud_aiplatform_v1beta1_migratable_resource_data_labeling_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


