# GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest

Request for UploadIntegrationVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The textproto of the integration_version. | [optional] 
**file_format** | **str** | File format for upload request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_upload_integration_version_request import GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest from a JSON string
google_cloud_integrations_v1alpha_upload_integration_version_request_instance = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_upload_integration_version_request_dict = google_cloud_integrations_v1alpha_upload_integration_version_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest from a dict
google_cloud_integrations_v1alpha_upload_integration_version_request_from_dict = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest.from_dict(google_cloud_integrations_v1alpha_upload_integration_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


