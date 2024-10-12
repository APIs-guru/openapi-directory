# GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse

Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_template_versions** | [**List[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion]**](GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.md) | The IntegrationTemplateVersions which match the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_integration_template_versions_response import GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse from a JSON string
google_cloud_integrations_v1alpha_list_integration_template_versions_response_instance = GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_integration_template_versions_response_dict = google_cloud_integrations_v1alpha_list_integration_template_versions_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse from a dict
google_cloud_integrations_v1alpha_list_integration_template_versions_response_from_dict = GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse.from_dict(google_cloud_integrations_v1alpha_list_integration_template_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


