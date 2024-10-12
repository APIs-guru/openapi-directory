# GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata

Runtime operation information for MigrationService.BatchMigrateResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 
**partial_results** | [**List[GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadataPartialResult]**](GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadataPartialResult.md) | Partial results that reflect the latest migration operation progress. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata import GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata from a JSON string
google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata_instance = GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata_dict = google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata from a dict
google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata_from_dict = GoogleCloudAiplatformV1beta1BatchMigrateResourcesOperationMetadata.from_dict(google_cloud_aiplatform_v1beta1_batch_migrate_resources_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


