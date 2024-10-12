# SamlIdpConfig

SAML IDP (identity provider) configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_password_uri** | **str** | The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at &#x60;myaccount.google.com&#x60;. This takes precedence over the change password URL configured at customer-level. Must use &#x60;HTTPS&#x60;. | [optional] 
**entity_id** | **str** | Required. The SAML **Entity ID** of the identity provider. | [optional] 
**logout_redirect_uri** | **str** | The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML &#x60;LogoutRequest&#x60; i.e. SAML single logout is not supported. Must use &#x60;HTTPS&#x60;. | [optional] 
**single_sign_on_service_uri** | **str** | Required. The &#x60;SingleSignOnService&#x60; endpoint location (sign-in page URL) of the identity provider. This is the URL where the &#x60;AuthnRequest&#x60; will be sent. Must use &#x60;HTTPS&#x60;. Assumed to accept the &#x60;HTTP-Redirect&#x60; binding. | [optional] 

## Example

```python
from openapi_client.models.saml_idp_config import SamlIdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SamlIdpConfig from a JSON string
saml_idp_config_instance = SamlIdpConfig.from_json(json)
# print the JSON string representation of the object
print(SamlIdpConfig.to_json())

# convert the object into a dict
saml_idp_config_dict = saml_idp_config_instance.to_dict()
# create an instance of SamlIdpConfig from a dict
saml_idp_config_from_dict = SamlIdpConfig.from_dict(saml_idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


