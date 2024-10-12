# GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse

Response for listing RuntimeEntitySchemas for a specific Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**runtime_entity_schemas** | [**List[GoogleCloudIntegrationsV1alphaRuntimeEntitySchema]**](GoogleCloudIntegrationsV1alphaRuntimeEntitySchema.md) | Runtime entity schemas. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response import GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse from a JSON string
google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response_instance = GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response_dict = google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse from a dict
google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response_from_dict = GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse.from_dict(google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


