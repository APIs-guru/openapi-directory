# GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials

Indicates which credentials to pass to the registered Blocking Functions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **bool** | Whether to pass the user&#39;s OAuth identity provider&#39;s access token. | [optional] 
**id_token** | **bool** | Whether to pass the user&#39;s OIDC identity provider&#39;s ID token. | [optional] 
**refresh_token** | **bool** | Whether to pass the user&#39;s OAuth identity provider&#39;s refresh token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials import GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials from a JSON string
google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials_instance = GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials_dict = google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials from a dict
google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials_from_dict = GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials.from_dict(google_cloud_identitytoolkit_admin_v2_forward_inbound_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


