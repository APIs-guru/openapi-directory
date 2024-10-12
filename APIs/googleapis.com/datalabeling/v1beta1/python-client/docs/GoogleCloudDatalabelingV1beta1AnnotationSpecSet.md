# GoogleCloudDatalabelingV1beta1AnnotationSpecSet

An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_specs** | [**List[GoogleCloudDatalabelingV1beta1AnnotationSpec]**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) | Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task. | [optional] 
**blocking_resources** | **List[str]** | Output only. The names of any related resources that are blocking changes to the annotation spec set. | [optional] 
**description** | **str** | Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long. | [optional] 
**display_name** | **str** | Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters. | [optional] 
**name** | **str** | Output only. The AnnotationSpecSet resource name in the following format: \&quot;projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation_spec_set import GoogleCloudDatalabelingV1beta1AnnotationSpecSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpecSet from a JSON string
google_cloud_datalabeling_v1beta1_annotation_spec_set_instance = GoogleCloudDatalabelingV1beta1AnnotationSpecSet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotationSpecSet.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_spec_set_dict = google_cloud_datalabeling_v1beta1_annotation_spec_set_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpecSet from a dict
google_cloud_datalabeling_v1beta1_annotation_spec_set_from_dict = GoogleCloudDatalabelingV1beta1AnnotationSpecSet.from_dict(google_cloud_datalabeling_v1beta1_annotation_spec_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


