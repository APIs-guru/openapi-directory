# GoogleCloudIdentitytoolkitV2RevokeTokenRequest

Request message for RevokeToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately. | [optional] 
**provider_id** | **str** | Required. The idp provider for the token. Currently only supports Apple Idp. The format should be \&quot;apple.com\&quot;. | [optional] 
**redirect_uri** | **str** | The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can&#39;t contain an IP address or localhost. Required if token_type is CODE. | [optional] 
**tenant_id** | **str** | The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. | [optional] 
**token** | **str** | Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged. | [optional] 
**token_type** | **str** | Required. The type of the token to be revoked. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_revoke_token_request import GoogleCloudIdentitytoolkitV2RevokeTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2RevokeTokenRequest from a JSON string
google_cloud_identitytoolkit_v2_revoke_token_request_instance = GoogleCloudIdentitytoolkitV2RevokeTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2RevokeTokenRequest.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_revoke_token_request_dict = google_cloud_identitytoolkit_v2_revoke_token_request_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2RevokeTokenRequest from a dict
google_cloud_identitytoolkit_v2_revoke_token_request_from_dict = GoogleCloudIdentitytoolkitV2RevokeTokenRequest.from_dict(google_cloud_identitytoolkit_v2_revoke_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


