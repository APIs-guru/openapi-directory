# GoogleCloudIdentitytoolkitAdminV2IdpConfig

The SAML IdP (Identity Provider) configuration when the project acts as the relying party.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idp_certificates** | [**List[GoogleCloudIdentitytoolkitAdminV2IdpCertificate]**](GoogleCloudIdentitytoolkitAdminV2IdpCertificate.md) | IDP&#39;s public keys for verifying signature in the assertions. | [optional] 
**idp_entity_id** | **str** | Unique identifier for all SAML entities. | [optional] 
**sign_request** | **bool** | Indicates if outbounding SAMLRequest should be signed. | [optional] 
**sso_url** | **str** | URL to send Authentication request to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_idp_config import GoogleCloudIdentitytoolkitAdminV2IdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2IdpConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_idp_config_instance = GoogleCloudIdentitytoolkitAdminV2IdpConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2IdpConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_idp_config_dict = google_cloud_identitytoolkit_admin_v2_idp_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2IdpConfig from a dict
google_cloud_identitytoolkit_admin_v2_idp_config_from_dict = GoogleCloudIdentitytoolkitAdminV2IdpConfig.from_dict(google_cloud_identitytoolkit_admin_v2_idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


