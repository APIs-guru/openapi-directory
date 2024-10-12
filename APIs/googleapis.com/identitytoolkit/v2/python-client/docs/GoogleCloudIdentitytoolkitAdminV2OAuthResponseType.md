# GoogleCloudIdentitytoolkitAdminV2OAuthResponseType

The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **bool** | If true, authorization code is returned from IdP&#39;s authorization endpoint. | [optional] 
**id_token** | **bool** | If true, ID token is returned from IdP&#39;s authorization endpoint. | [optional] 
**token** | **bool** | Do not use. The &#x60;token&#x60; response type is not supported at the moment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_o_auth_response_type import GoogleCloudIdentitytoolkitAdminV2OAuthResponseType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2OAuthResponseType from a JSON string
google_cloud_identitytoolkit_admin_v2_o_auth_response_type_instance = GoogleCloudIdentitytoolkitAdminV2OAuthResponseType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2OAuthResponseType.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_o_auth_response_type_dict = google_cloud_identitytoolkit_admin_v2_o_auth_response_type_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2OAuthResponseType from a dict
google_cloud_identitytoolkit_admin_v2_o_auth_response_type_from_dict = GoogleCloudIdentitytoolkitAdminV2OAuthResponseType.from_dict(google_cloud_identitytoolkit_admin_v2_o_auth_response_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


