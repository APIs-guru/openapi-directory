# GoogleCloudAiplatformV1MetadataStore

Instance of a metadata store. Contains a set of metadata that can be queried.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this MetadataStore was created. | [optional] [readonly] 
**description** | **str** | Description of the MetadataStore. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the MetadataStore instance. | [optional] [readonly] 
**state** | [**GoogleCloudAiplatformV1MetadataStoreMetadataStoreState**](GoogleCloudAiplatformV1MetadataStoreMetadataStoreState.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this MetadataStore was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_metadata_store import GoogleCloudAiplatformV1MetadataStore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MetadataStore from a JSON string
google_cloud_aiplatform_v1_metadata_store_instance = GoogleCloudAiplatformV1MetadataStore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MetadataStore.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_metadata_store_dict = google_cloud_aiplatform_v1_metadata_store_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MetadataStore from a dict
google_cloud_aiplatform_v1_metadata_store_from_dict = GoogleCloudAiplatformV1MetadataStore.from_dict(google_cloud_aiplatform_v1_metadata_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


