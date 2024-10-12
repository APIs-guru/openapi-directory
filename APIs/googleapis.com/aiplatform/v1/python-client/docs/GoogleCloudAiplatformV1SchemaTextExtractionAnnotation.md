# GoogleCloudAiplatformV1SchemaTextExtractionAnnotation

Annotation details specific to text extraction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | The resource Id of the AnnotationSpec that this Annotation pertains to. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that this Annotation pertains to. | [optional] 
**text_segment** | [**GoogleCloudAiplatformV1SchemaTextSegment**](GoogleCloudAiplatformV1SchemaTextSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_text_extraction_annotation import GoogleCloudAiplatformV1SchemaTextExtractionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTextExtractionAnnotation from a JSON string
google_cloud_aiplatform_v1_schema_text_extraction_annotation_instance = GoogleCloudAiplatformV1SchemaTextExtractionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTextExtractionAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_text_extraction_annotation_dict = google_cloud_aiplatform_v1_schema_text_extraction_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTextExtractionAnnotation from a dict
google_cloud_aiplatform_v1_schema_text_extraction_annotation_from_dict = GoogleCloudAiplatformV1SchemaTextExtractionAnnotation.from_dict(google_cloud_aiplatform_v1_schema_text_extraction_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


