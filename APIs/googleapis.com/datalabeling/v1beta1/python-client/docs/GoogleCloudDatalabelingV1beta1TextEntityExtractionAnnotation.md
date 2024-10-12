# GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation

Text entity extraction annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**sequential_segment** | [**GoogleCloudDatalabelingV1beta1SequentialSegment**](GoogleCloudDatalabelingV1beta1SequentialSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation import GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation_instance = GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation_dict = google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation from a dict
google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation_from_dict = GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation.from_dict(google_cloud_datalabeling_v1beta1_text_entity_extraction_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


