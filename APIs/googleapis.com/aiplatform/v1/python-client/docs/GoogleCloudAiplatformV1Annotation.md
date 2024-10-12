# GoogleCloudAiplatformV1Annotation

Used to assign specific AnnotationSpec to a particular area of a DataItem or the whole part of the DataItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_source** | [**GoogleCloudAiplatformV1UserActionReference**](GoogleCloudAiplatformV1UserActionReference.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this Annotation was created. | [optional] [readonly] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your Annotations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Annotation(System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. Following system labels exist for each Annotation: * \&quot;aiplatform.googleapis.com/annotation_set_name\&quot;: optional, name of the UI&#39;s annotation set this Annotation belongs to. If not set, the Annotation is not visible in the UI. * \&quot;aiplatform.googleapis.com/payload_schema\&quot;: output only, its value is the payload_schema&#39;s title. | [optional] 
**name** | **str** | Output only. Resource name of the Annotation. | [optional] [readonly] 
**payload** | **object** | Required. The schema of the payload can be found in payload_schema. | [optional] 
**payload_schema_uri** | **str** | Required. Google Cloud Storage URI points to a YAML file describing payload. The schema is defined as an [OpenAPI 3.0.2 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/annotation/, note that the chosen schema must be consistent with the parent Dataset&#39;s metadata. | [optional] 
**update_time** | **str** | Output only. Timestamp when this Annotation was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_annotation import GoogleCloudAiplatformV1Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Annotation from a JSON string
google_cloud_aiplatform_v1_annotation_instance = GoogleCloudAiplatformV1Annotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Annotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_annotation_dict = google_cloud_aiplatform_v1_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Annotation from a dict
google_cloud_aiplatform_v1_annotation_from_dict = GoogleCloudAiplatformV1Annotation.from_dict(google_cloud_aiplatform_v1_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


