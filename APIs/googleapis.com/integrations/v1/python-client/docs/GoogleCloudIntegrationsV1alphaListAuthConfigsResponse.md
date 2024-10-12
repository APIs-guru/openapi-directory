# GoogleCloudIntegrationsV1alphaListAuthConfigsResponse

Response to list AuthConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_configs** | [**List[GoogleCloudIntegrationsV1alphaAuthConfig]**](GoogleCloudIntegrationsV1alphaAuthConfig.md) | The list of AuthConfigs retrieved. | [optional] 
**next_page_token** | **str** | The token used to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_auth_configs_response import GoogleCloudIntegrationsV1alphaListAuthConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListAuthConfigsResponse from a JSON string
google_cloud_integrations_v1alpha_list_auth_configs_response_instance = GoogleCloudIntegrationsV1alphaListAuthConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListAuthConfigsResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_auth_configs_response_dict = google_cloud_integrations_v1alpha_list_auth_configs_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListAuthConfigsResponse from a dict
google_cloud_integrations_v1alpha_list_auth_configs_response_from_dict = GoogleCloudIntegrationsV1alphaListAuthConfigsResponse.from_dict(google_cloud_integrations_v1alpha_list_auth_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


