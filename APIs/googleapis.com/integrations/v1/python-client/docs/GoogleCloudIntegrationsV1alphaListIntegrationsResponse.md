# GoogleCloudIntegrationsV1alphaListIntegrationsResponse

Response for ListIntegrations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrations** | [**List[GoogleCloudIntegrationsV1alphaIntegration]**](GoogleCloudIntegrationsV1alphaIntegration.md) | The integrations which match the request. | [optional] 
**next_page_token** | **str** | The next page token for the response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_integrations_response import GoogleCloudIntegrationsV1alphaListIntegrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationsResponse from a JSON string
google_cloud_integrations_v1alpha_list_integrations_response_instance = GoogleCloudIntegrationsV1alphaListIntegrationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListIntegrationsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_integrations_response_dict = google_cloud_integrations_v1alpha_list_integrations_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListIntegrationsResponse from a dict
google_cloud_integrations_v1alpha_list_integrations_response_from_dict = GoogleCloudIntegrationsV1alphaListIntegrationsResponse.from_dict(google_cloud_integrations_v1alpha_list_integrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


