# GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary

A point in a conversation that marks the start or the end of an annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcript_index** | **int** | The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero. | [optional] 
**word_index** | **int** | The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_annotation_boundary import GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary from a JSON string
google_cloud_contactcenterinsights_v1alpha1_annotation_boundary_instance = GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_annotation_boundary_dict = google_cloud_contactcenterinsights_v1alpha1_annotation_boundary_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary from a dict
google_cloud_contactcenterinsights_v1alpha1_annotation_boundary_from_dict = GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.from_dict(google_cloud_contactcenterinsights_v1alpha1_annotation_boundary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


