# GoogleCloudDatalabelingV1beta1AnnotatedDataset

AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_source** | **str** | Output only. Source of the annotation. | [optional] 
**annotation_type** | **str** | Output only. Type of the annotation. It is specified when starting labeling task. | [optional] 
**blocking_resources** | **List[str]** | Output only. The names of any related resources that are blocking changes to the annotated dataset. | [optional] 
**completed_example_count** | **str** | Output only. Number of examples that have annotation in the annotated dataset. | [optional] 
**create_time** | **str** | Output only. Time the AnnotatedDataset was created. | [optional] 
**description** | **str** | Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters. | [optional] 
**display_name** | **str** | Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters. | [optional] 
**example_count** | **str** | Output only. Number of examples in the annotated dataset. | [optional] 
**label_stats** | [**GoogleCloudDatalabelingV1beta1LabelStats**](GoogleCloudDatalabelingV1beta1LabelStats.md) |  | [optional] 
**metadata** | [**GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata**](GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.md) |  | [optional] 
**name** | **str** | Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotated_dataset import GoogleCloudDatalabelingV1beta1AnnotatedDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotatedDataset from a JSON string
google_cloud_datalabeling_v1beta1_annotated_dataset_instance = GoogleCloudDatalabelingV1beta1AnnotatedDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotatedDataset.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotated_dataset_dict = google_cloud_datalabeling_v1beta1_annotated_dataset_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotatedDataset from a dict
google_cloud_datalabeling_v1beta1_annotated_dataset_from_dict = GoogleCloudDatalabelingV1beta1AnnotatedDataset.from_dict(google_cloud_datalabeling_v1beta1_annotated_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


