# GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invalid_record_count** | **str** | Number of records in this file we skipped due to validate errors. | [optional] 
**partial_errors** | [**List[GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError]**](GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataRecordError.md) | The detail information of the partial failures encountered for those invalid records that couldn&#39;t be parsed. Up to 50 partial errors will be reported. | [optional] 
**source_gcs_uri** | **str** | Cloud Storage URI pointing to the original file in user&#39;s bucket. | [optional] 
**valid_record_count** | **str** | Number of records in this file that were successfully processed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats import GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats from a JSON string
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats_instance = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats_dict = google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats from a dict
google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats_from_dict = GoogleCloudAiplatformV1NearestNeighborSearchOperationMetadataContentValidationStats.from_dict(google_cloud_aiplatform_v1_nearest_neighbor_search_operation_metadata_content_validation_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


