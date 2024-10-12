# GoogleCloudIntegrationsV1alphaServiceAccountCredentials

Represents the service account which can be used to generate access token for authenticating the service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | A space-delimited list of requested scope permissions. | [optional] 
**service_account** | **str** | Name of the service account that has the permission to make the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_service_account_credentials import GoogleCloudIntegrationsV1alphaServiceAccountCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaServiceAccountCredentials from a JSON string
google_cloud_integrations_v1alpha_service_account_credentials_instance = GoogleCloudIntegrationsV1alphaServiceAccountCredentials.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaServiceAccountCredentials.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_service_account_credentials_dict = google_cloud_integrations_v1alpha_service_account_credentials_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaServiceAccountCredentials from a dict
google_cloud_integrations_v1alpha_service_account_credentials_from_dict = GoogleCloudIntegrationsV1alphaServiceAccountCredentials.from_dict(google_cloud_integrations_v1alpha_service_account_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


