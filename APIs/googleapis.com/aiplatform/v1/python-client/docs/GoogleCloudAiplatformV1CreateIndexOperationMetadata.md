# GoogleCloudAiplatformV1CreateIndexOperationMetadata

Runtime operation information for IndexService.CreateIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 
**nearest_neighbor_search_operation_metadata** | [**GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata**](GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_create_index_operation_metadata import GoogleCloudAiplatformV1CreateIndexOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CreateIndexOperationMetadata from a JSON string
google_cloud_aiplatform_v1_create_index_operation_metadata_instance = GoogleCloudAiplatformV1CreateIndexOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CreateIndexOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_create_index_operation_metadata_dict = google_cloud_aiplatform_v1_create_index_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CreateIndexOperationMetadata from a dict
google_cloud_aiplatform_v1_create_index_operation_metadata_from_dict = GoogleCloudAiplatformV1CreateIndexOperationMetadata.from_dict(google_cloud_aiplatform_v1_create_index_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


