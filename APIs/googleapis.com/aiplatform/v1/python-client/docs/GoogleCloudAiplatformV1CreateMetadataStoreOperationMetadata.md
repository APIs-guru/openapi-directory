# GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata

Details of operations that perform MetadataService.CreateMetadataStore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_create_metadata_store_operation_metadata import GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata from a JSON string
google_cloud_aiplatform_v1_create_metadata_store_operation_metadata_instance = GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_create_metadata_store_operation_metadata_dict = google_cloud_aiplatform_v1_create_metadata_store_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata from a dict
google_cloud_aiplatform_v1_create_metadata_store_operation_metadata_from_dict = GoogleCloudAiplatformV1CreateMetadataStoreOperationMetadata.from_dict(google_cloud_aiplatform_v1_create_metadata_store_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


