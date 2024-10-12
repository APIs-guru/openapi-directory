# GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata

Runtime operation metadata with regard to Matching Engine Index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_validation_stats** | [**List[GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats]**](GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats.md) | The validation stats of the content (per file) to be inserted or updated on the Matching Engine Index resource. Populated if contentsDeltaUri is provided as part of Index.metadata. Please note that, currently for those files that are broken or has unsupported file format, we will not have the stats for those files. | [optional] 
**data_bytes_count** | **str** | The ingested data size in bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata import GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata from a JSON string
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_instance = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_dict = google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata from a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_from_dict = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadata.from_dict(google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


