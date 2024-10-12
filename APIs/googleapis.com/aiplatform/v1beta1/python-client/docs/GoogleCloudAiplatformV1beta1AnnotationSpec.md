# GoogleCloudAiplatformV1beta1AnnotationSpec

Identifies a concept with which DataItems may be annotated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this AnnotationSpec was created. | [optional] [readonly] 
**display_name** | **str** | Required. The user-defined name of the AnnotationSpec. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**name** | **str** | Output only. Resource name of the AnnotationSpec. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when AnnotationSpec was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_annotation_spec import GoogleCloudAiplatformV1beta1AnnotationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1AnnotationSpec from a JSON string
google_cloud_aiplatform_v1beta1_annotation_spec_instance = GoogleCloudAiplatformV1beta1AnnotationSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1AnnotationSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_annotation_spec_dict = google_cloud_aiplatform_v1beta1_annotation_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1AnnotationSpec from a dict
google_cloud_aiplatform_v1beta1_annotation_spec_from_dict = GoogleCloudAiplatformV1beta1AnnotationSpec.from_dict(google_cloud_aiplatform_v1beta1_annotation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


