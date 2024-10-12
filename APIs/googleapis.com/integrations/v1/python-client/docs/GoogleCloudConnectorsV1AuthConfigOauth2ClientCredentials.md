# GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials

Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client identifier. | [optional] 
**client_secret** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_oauth2_client_credentials import GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials from a JSON string
google_cloud_connectors_v1_auth_config_oauth2_client_credentials_instance = GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_oauth2_client_credentials_dict = google_cloud_connectors_v1_auth_config_oauth2_client_credentials_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials from a dict
google_cloud_connectors_v1_auth_config_oauth2_client_credentials_from_dict = GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials.from_dict(google_cloud_connectors_v1_auth_config_oauth2_client_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


