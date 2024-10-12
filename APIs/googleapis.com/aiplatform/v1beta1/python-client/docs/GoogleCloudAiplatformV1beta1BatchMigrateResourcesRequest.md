# GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest

Request message for MigrationService.BatchMigrateResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrate_resource_requests** | [**List[GoogleCloudAiplatformV1beta1MigrateResourceRequest]**](GoogleCloudAiplatformV1beta1MigrateResourceRequest.md) | Required. The request messages specifying the resources to migrate. They must be in the same location as the destination. Up to 50 resources can be migrated in one batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_migrate_resources_request import GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest from a JSON string
google_cloud_aiplatform_v1beta1_batch_migrate_resources_request_instance = GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_migrate_resources_request_dict = google_cloud_aiplatform_v1beta1_batch_migrate_resources_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest from a dict
google_cloud_aiplatform_v1beta1_batch_migrate_resources_request_from_dict = GoogleCloudAiplatformV1beta1BatchMigrateResourcesRequest.from_dict(google_cloud_aiplatform_v1beta1_batch_migrate_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


