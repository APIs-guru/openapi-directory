# GoogleCloudDatalabelingV1beta1Annotation

Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_metadata** | [**GoogleCloudDatalabelingV1beta1AnnotationMetadata**](GoogleCloudDatalabelingV1beta1AnnotationMetadata.md) |  | [optional] 
**annotation_sentiment** | **str** | Output only. Sentiment for this annotation. | [optional] 
**annotation_source** | **str** | Output only. The source of the annotation. | [optional] 
**annotation_value** | [**GoogleCloudDatalabelingV1beta1AnnotationValue**](GoogleCloudDatalabelingV1beta1AnnotationValue.md) |  | [optional] 
**name** | **str** | Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation import GoogleCloudDatalabelingV1beta1Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Annotation from a JSON string
google_cloud_datalabeling_v1beta1_annotation_instance = GoogleCloudDatalabelingV1beta1Annotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Annotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_dict = google_cloud_datalabeling_v1beta1_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Annotation from a dict
google_cloud_datalabeling_v1beta1_annotation_from_dict = GoogleCloudDatalabelingV1beta1Annotation.from_dict(google_cloud_datalabeling_v1beta1_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


