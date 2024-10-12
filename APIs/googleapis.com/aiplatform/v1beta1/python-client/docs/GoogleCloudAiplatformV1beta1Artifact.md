# GoogleCloudAiplatformV1beta1Artifact

Instance of a general artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Artifact was created. | [optional] [readonly] 
**description** | **str** | Description of the Artifact | [optional] 
**display_name** | **str** | User provided display name of the Artifact. May be up to 128 Unicode characters. | [optional] 
**etag** | **str** | An eTag used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Artifacts. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Artifact (System labels are excluded). | [optional] 
**metadata** | **Dict[str, object]** | Properties of the Artifact. Top level metadata keys&#39; heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB. | [optional] 
**name** | **str** | Output only. The resource name of the Artifact. | [optional] [readonly] 
**schema_title** | **str** | The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store. | [optional] 
**schema_version** | **str** | The version of the schema in schema_name to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store. | [optional] 
**state** | **str** | The state of this Artifact. This is a property of the Artifact, and does not imply or capture any ongoing process. This property is managed by clients (such as Vertex AI Pipelines), and the system does not prescribe or check the validity of state transitions. | [optional] 
**update_time** | **str** | Output only. Timestamp when this Artifact was last updated. | [optional] [readonly] 
**uri** | **str** | The uniform resource identifier of the artifact file. May be empty if there is no actual artifact file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_artifact import GoogleCloudAiplatformV1beta1Artifact

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Artifact from a JSON string
google_cloud_aiplatform_v1beta1_artifact_instance = GoogleCloudAiplatformV1beta1Artifact.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Artifact.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_artifact_dict = google_cloud_aiplatform_v1beta1_artifact_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Artifact from a dict
google_cloud_aiplatform_v1beta1_artifact_from_dict = GoogleCloudAiplatformV1beta1Artifact.from_dict(google_cloud_aiplatform_v1beta1_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


