# GoogleCloudAiplatformV1Context

Instance of a general context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Context was created. | [optional] [readonly] 
**description** | **str** | Description of the Context | [optional] 
**display_name** | **str** | User provided display name of the Context. May be up to 128 Unicode characters. | [optional] 
**etag** | **str** | An eTag used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Contexts. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Context (System labels are excluded). | [optional] 
**metadata** | **Dict[str, object]** | Properties of the Context. Top level metadata keys&#39; heading and trailing spaces will be trimmed. The size of this field should not exceed 200KB. | [optional] 
**name** | **str** | Immutable. The resource name of the Context. | [optional] 
**parent_contexts** | **List[str]** | Output only. A list of resource names of Contexts that are parents of this Context. A Context may have at most 10 parent_contexts. | [optional] [readonly] 
**schema_title** | **str** | The title of the schema describing the metadata. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store. | [optional] 
**schema_version** | **str** | The version of the schema in schema_name to use. Schema title and version is expected to be registered in earlier Create Schema calls. And both are used together as unique identifiers to identify schemas within the local metadata store. | [optional] 
**update_time** | **str** | Output only. Timestamp when this Context was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_context import GoogleCloudAiplatformV1Context

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Context from a JSON string
google_cloud_aiplatform_v1_context_instance = GoogleCloudAiplatformV1Context.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Context.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_context_dict = google_cloud_aiplatform_v1_context_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Context from a dict
google_cloud_aiplatform_v1_context_from_dict = GoogleCloudAiplatformV1Context.from_dict(google_cloud_aiplatform_v1_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


