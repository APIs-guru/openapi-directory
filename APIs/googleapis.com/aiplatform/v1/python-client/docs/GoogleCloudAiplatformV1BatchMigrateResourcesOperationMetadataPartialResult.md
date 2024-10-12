# GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult

Represents a partial result in batch migration operation for one MigrateResourceRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Migrated dataset resource name. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**model** | **str** | Migrated model resource name. | [optional] 
**request** | [**GoogleCloudAiplatformV1MigrateResourceRequest**](GoogleCloudAiplatformV1MigrateResourceRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result import GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult from a JSON string
google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result_instance = GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result_dict = google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult from a dict
google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result_from_dict = GoogleCloudAiplatformV1BatchMigrateResourcesOperationMetadataPartialResult.from_dict(google_cloud_aiplatform_v1_batch_migrate_resources_operation_metadata_partial_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


