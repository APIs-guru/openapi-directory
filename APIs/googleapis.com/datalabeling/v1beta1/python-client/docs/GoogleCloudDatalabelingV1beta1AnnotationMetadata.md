# GoogleCloudDatalabelingV1beta1AnnotationMetadata

Additional information associated with the annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_metadata** | [**GoogleCloudDatalabelingV1beta1OperatorMetadata**](GoogleCloudDatalabelingV1beta1OperatorMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation_metadata import GoogleCloudDatalabelingV1beta1AnnotationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationMetadata from a JSON string
google_cloud_datalabeling_v1beta1_annotation_metadata_instance = GoogleCloudDatalabelingV1beta1AnnotationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotationMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_metadata_dict = google_cloud_datalabeling_v1beta1_annotation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationMetadata from a dict
google_cloud_datalabeling_v1beta1_annotation_metadata_from_dict = GoogleCloudDatalabelingV1beta1AnnotationMetadata.from_dict(google_cloud_datalabeling_v1beta1_annotation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


