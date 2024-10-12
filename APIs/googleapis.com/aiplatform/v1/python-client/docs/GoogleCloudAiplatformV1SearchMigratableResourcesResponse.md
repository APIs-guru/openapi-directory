# GoogleCloudAiplatformV1SearchMigratableResourcesResponse

Response message for MigrationService.SearchMigratableResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migratable_resources** | [**List[GoogleCloudAiplatformV1MigratableResource]**](GoogleCloudAiplatformV1MigratableResource.md) | All migratable resources that can be migrated to the location specified in the request. | [optional] 
**next_page_token** | **str** | The standard next-page token. The migratable_resources may not fill page_size in SearchMigratableResourcesRequest even when there are subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_migratable_resources_response import GoogleCloudAiplatformV1SearchMigratableResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchMigratableResourcesResponse from a JSON string
google_cloud_aiplatform_v1_search_migratable_resources_response_instance = GoogleCloudAiplatformV1SearchMigratableResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchMigratableResourcesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_migratable_resources_response_dict = google_cloud_aiplatform_v1_search_migratable_resources_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchMigratableResourcesResponse from a dict
google_cloud_aiplatform_v1_search_migratable_resources_response_from_dict = GoogleCloudAiplatformV1SearchMigratableResourcesResponse.from_dict(google_cloud_aiplatform_v1_search_migratable_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


