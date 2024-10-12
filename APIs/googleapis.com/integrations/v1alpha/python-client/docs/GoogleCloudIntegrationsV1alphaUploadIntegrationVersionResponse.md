# GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse

Response for UploadIntegrationVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration_version** | [**GoogleCloudIntegrationsV1alphaIntegrationVersion**](GoogleCloudIntegrationsV1alphaIntegrationVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_upload_integration_version_response import GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse from a JSON string
google_cloud_integrations_v1alpha_upload_integration_version_response_instance = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_upload_integration_version_response_dict = google_cloud_integrations_v1alpha_upload_integration_version_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse from a dict
google_cloud_integrations_v1alpha_upload_integration_version_response_from_dict = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse.from_dict(google_cloud_integrations_v1alpha_upload_integration_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


