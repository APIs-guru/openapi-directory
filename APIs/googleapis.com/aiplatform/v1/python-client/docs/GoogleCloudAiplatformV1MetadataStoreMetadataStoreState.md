# GoogleCloudAiplatformV1MetadataStoreMetadataStoreState

Represents state information for a MetadataStore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_utilization_bytes** | **str** | The disk utilization of the MetadataStore in bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_metadata_store_metadata_store_state import GoogleCloudAiplatformV1MetadataStoreMetadataStoreState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MetadataStoreMetadataStoreState from a JSON string
google_cloud_aiplatform_v1_metadata_store_metadata_store_state_instance = GoogleCloudAiplatformV1MetadataStoreMetadataStoreState.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MetadataStoreMetadataStoreState.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_metadata_store_metadata_store_state_dict = google_cloud_aiplatform_v1_metadata_store_metadata_store_state_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MetadataStoreMetadataStoreState from a dict
google_cloud_aiplatform_v1_metadata_store_metadata_store_state_from_dict = GoogleCloudAiplatformV1MetadataStoreMetadataStoreState.from_dict(google_cloud_aiplatform_v1_metadata_store_metadata_store_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


