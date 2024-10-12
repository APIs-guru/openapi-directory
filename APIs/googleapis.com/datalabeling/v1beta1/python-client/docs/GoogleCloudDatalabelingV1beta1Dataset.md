# GoogleCloudDatalabelingV1beta1Dataset

Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocking_resources** | **List[str]** | Output only. The names of any related resources that are blocking changes to the dataset. | [optional] 
**create_time** | **str** | Output only. Time the dataset is created. | [optional] 
**data_item_count** | **str** | Output only. The number of data items in the dataset. | [optional] 
**description** | **str** | Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long. | [optional] 
**display_name** | **str** | Required. The display name of the dataset. Maximum of 64 characters. | [optional] 
**input_configs** | [**List[GoogleCloudDatalabelingV1beta1InputConfig]**](GoogleCloudDatalabelingV1beta1InputConfig.md) | Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset. | [optional] 
**last_migrate_time** | **str** | Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated. | [optional] 
**name** | **str** | Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_dataset import GoogleCloudDatalabelingV1beta1Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Dataset from a JSON string
google_cloud_datalabeling_v1beta1_dataset_instance = GoogleCloudDatalabelingV1beta1Dataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Dataset.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_dataset_dict = google_cloud_datalabeling_v1beta1_dataset_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Dataset from a dict
google_cloud_datalabeling_v1beta1_dataset_from_dict = GoogleCloudDatalabelingV1beta1Dataset.from_dict(google_cloud_datalabeling_v1beta1_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


