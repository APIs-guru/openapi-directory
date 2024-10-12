# GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedding_id** | **str** | Empty if the embedding id is failed to parse. | [optional] 
**error_message** | **str** | A human-readable message that is shown to the user to help them fix the error. Note that this message may change from time to time, your code should check against error_type as the source of truth. | [optional] 
**error_type** | **str** | The error type of this record. | [optional] 
**raw_record** | **str** | The original content of this record. | [optional] 
**source_gcs_uri** | **str** | Cloud Storage URI pointing to the original file in user&#39;s bucket. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error import GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError from a JSON string
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error_instance = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error_dict = google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError from a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error_from_dict = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError.from_dict(google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_record_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


