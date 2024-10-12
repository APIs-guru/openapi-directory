# GoogleCloudIntegrationsV1alphaAuthToken

The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The token for the auth type. | [optional] 
**type** | **str** | Authentication type, e.g. \&quot;Basic\&quot;, \&quot;Bearer\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_auth_token import GoogleCloudIntegrationsV1alphaAuthToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaAuthToken from a JSON string
google_cloud_integrations_v1alpha_auth_token_instance = GoogleCloudIntegrationsV1alphaAuthToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaAuthToken.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_auth_token_dict = google_cloud_integrations_v1alpha_auth_token_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaAuthToken from a dict
google_cloud_integrations_v1alpha_auth_token_from_dict = GoogleCloudIntegrationsV1alphaAuthToken.from_dict(google_cloud_integrations_v1alpha_auth_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


