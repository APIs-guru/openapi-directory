# GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse

Response for ListIntegrationVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_versions** | [**List[GoogleCloudIntegrationsV1alphaIntegrationVersion]**](GoogleCloudIntegrationsV1alphaIntegrationVersion.md) | The integrations which match the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**no_permission** | **bool** | Whether the user has no permission on the version or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_integration_versions_response import GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse from a JSON string
google_cloud_integrations_v1alpha_list_integration_versions_response_instance = GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_integration_versions_response_dict = google_cloud_integrations_v1alpha_list_integration_versions_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse from a dict
google_cloud_integrations_v1alpha_list_integration_versions_response_from_dict = GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse.from_dict(google_cloud_integrations_v1alpha_list_integration_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


