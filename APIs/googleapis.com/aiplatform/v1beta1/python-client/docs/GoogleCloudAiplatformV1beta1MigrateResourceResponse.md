# GoogleCloudAiplatformV1beta1MigrateResourceResponse

Describes a successfully migrated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Migrated Dataset&#39;s resource name. | [optional] 
**migratable_resource** | [**GoogleCloudAiplatformV1beta1MigratableResource**](GoogleCloudAiplatformV1beta1MigratableResource.md) |  | [optional] 
**model** | **str** | Migrated Model&#39;s resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_migrate_resource_response import GoogleCloudAiplatformV1beta1MigrateResourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceResponse from a JSON string
google_cloud_aiplatform_v1beta1_migrate_resource_response_instance = GoogleCloudAiplatformV1beta1MigrateResourceResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MigrateResourceResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_migrate_resource_response_dict = google_cloud_aiplatform_v1beta1_migrate_resource_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MigrateResourceResponse from a dict
google_cloud_aiplatform_v1beta1_migrate_resource_response_from_dict = GoogleCloudAiplatformV1beta1MigrateResourceResponse.from_dict(google_cloud_aiplatform_v1beta1_migrate_resource_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


