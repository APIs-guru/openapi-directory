# GoogleCloudAiplatformV1Index

A representation of a collection of database items organized in a way that allows for approximate nearest neighbor (a.k.a ANN) algorithms search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Index was created. | [optional] [readonly] 
**deployed_indexes** | [**List[GoogleCloudAiplatformV1DeployedIndexRef]**](GoogleCloudAiplatformV1DeployedIndexRef.md) | Output only. The pointers to DeployedIndexes created from this Index. An Index can be only deleted if all its DeployedIndexes had been undeployed first. | [optional] [readonly] 
**description** | **str** | The description of the Index. | [optional] 
**display_name** | **str** | Required. The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**index_stats** | [**GoogleCloudAiplatformV1IndexStats**](GoogleCloudAiplatformV1IndexStats.md) |  | [optional] 
**index_update_method** | **str** | Immutable. The update method to use with this Index. If not set, BATCH_UPDATE will be used by default. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Indexes. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**metadata** | **object** | An additional information about the Index; the schema of the metadata can be found in metadata_schema. | [optional] 
**metadata_schema_uri** | **str** | Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Index, that is specific to it. Unset if the Index does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**name** | **str** | Output only. The resource name of the Index. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this Index was most recently updated. This also includes any update to the contents of the Index. Note that Operations working on this Index may have their Operations.metadata.generic_metadata.update_time a little after the value of this timestamp, yet that does not mean their results are not already reflected in the Index. Result of any successfully completed Operation on the Index is reflected in it. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_index import GoogleCloudAiplatformV1Index

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Index from a JSON string
google_cloud_aiplatform_v1_index_instance = GoogleCloudAiplatformV1Index.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Index.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_index_dict = google_cloud_aiplatform_v1_index_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Index from a dict
google_cloud_aiplatform_v1_index_from_dict = GoogleCloudAiplatformV1Index.from_dict(google_cloud_aiplatform_v1_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


