# GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation

Annotation details specific to video classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | The resource Id of the AnnotationSpec that this Annotation pertains to. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that this Annotation pertains to. | [optional] 
**time_segment** | [**GoogleCloudAiplatformV1beta1SchemaTimeSegment**](GoogleCloudAiplatformV1beta1SchemaTimeSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_video_classification_annotation import GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation from a JSON string
google_cloud_aiplatform_v1beta1_schema_video_classification_annotation_instance = GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_video_classification_annotation_dict = google_cloud_aiplatform_v1beta1_schema_video_classification_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation from a dict
google_cloud_aiplatform_v1beta1_schema_video_classification_annotation_from_dict = GoogleCloudAiplatformV1beta1SchemaVideoClassificationAnnotation.from_dict(google_cloud_aiplatform_v1beta1_schema_video_classification_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


