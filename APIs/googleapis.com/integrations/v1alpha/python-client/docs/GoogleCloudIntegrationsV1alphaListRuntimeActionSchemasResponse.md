# GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse

Response for listing RuntimeActionSchemas for a specific Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**runtime_action_schemas** | [**List[GoogleCloudIntegrationsV1alphaRuntimeActionSchema]**](GoogleCloudIntegrationsV1alphaRuntimeActionSchema.md) | Runtime action schemas. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_runtime_action_schemas_response import GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse from a JSON string
google_cloud_integrations_v1alpha_list_runtime_action_schemas_response_instance = GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_runtime_action_schemas_response_dict = google_cloud_integrations_v1alpha_list_runtime_action_schemas_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse from a dict
google_cloud_integrations_v1alpha_list_runtime_action_schemas_response_from_dict = GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse.from_dict(google_cloud_integrations_v1alpha_list_runtime_action_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


