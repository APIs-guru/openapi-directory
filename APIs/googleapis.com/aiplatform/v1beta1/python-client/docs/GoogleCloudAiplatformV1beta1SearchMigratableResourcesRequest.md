# GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest

Request message for MigrationService.SearchMigratableResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filter for your search. You can use the following types of filters: * Resource type filters. The following strings filter for a specific type of MigratableResource: * &#x60;ml_engine_model_version:*&#x60; * &#x60;automl_model:*&#x60; * &#x60;automl_dataset:*&#x60; * &#x60;data_labeling_dataset:*&#x60; * \&quot;Migrated or not\&quot; filters. The following strings filter for resources that either have or have not already been migrated: * &#x60;last_migrate_time:*&#x60; filters for migrated resources. * &#x60;NOT last_migrate_time:*&#x60; filters for not yet migrated resources. | [optional] 
**page_size** | **int** | The standard page size. The default and maximum value is 100. | [optional] 
**page_token** | **str** | The standard page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_search_migratable_resources_request import GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest from a JSON string
google_cloud_aiplatform_v1beta1_search_migratable_resources_request_instance = GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_search_migratable_resources_request_dict = google_cloud_aiplatform_v1beta1_search_migratable_resources_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest from a dict
google_cloud_aiplatform_v1beta1_search_migratable_resources_request_from_dict = GoogleCloudAiplatformV1beta1SearchMigratableResourcesRequest.from_dict(google_cloud_aiplatform_v1beta1_search_migratable_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


