# GoogleCloudAiplatformV1BatchMigrateResourcesResponse

Response message for MigrationService.BatchMigrateResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrate_resource_responses** | [**List[GoogleCloudAiplatformV1MigrateResourceResponse]**](GoogleCloudAiplatformV1MigrateResourceResponse.md) | Successfully migrated resources. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_migrate_resources_response import GoogleCloudAiplatformV1BatchMigrateResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchMigrateResourcesResponse from a JSON string
google_cloud_aiplatform_v1_batch_migrate_resources_response_instance = GoogleCloudAiplatformV1BatchMigrateResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchMigrateResourcesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_migrate_resources_response_dict = google_cloud_aiplatform_v1_batch_migrate_resources_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchMigrateResourcesResponse from a dict
google_cloud_aiplatform_v1_batch_migrate_resources_response_from_dict = GoogleCloudAiplatformV1BatchMigrateResourcesResponse.from_dict(google_cloud_aiplatform_v1_batch_migrate_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


