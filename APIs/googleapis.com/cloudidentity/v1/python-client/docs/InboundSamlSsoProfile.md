# InboundSamlSsoProfile

A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Immutable. The customer. For example: &#x60;customers/C0123abc&#x60;. | [optional] 
**display_name** | **str** | Human-readable name of the SAML SSO profile. | [optional] 
**idp_config** | [**SamlIdpConfig**](SamlIdpConfig.md) |  | [optional] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. | [optional] [readonly] 
**sp_config** | [**SamlSpConfig**](SamlSpConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.inbound_saml_sso_profile import InboundSamlSsoProfile

# TODO update the JSON string below
json = "{}"
# create an instance of InboundSamlSsoProfile from a JSON string
inbound_saml_sso_profile_instance = InboundSamlSsoProfile.from_json(json)
# print the JSON string representation of the object
print(InboundSamlSsoProfile.to_json())

# convert the object into a dict
inbound_saml_sso_profile_dict = inbound_saml_sso_profile_instance.to_dict()
# create an instance of InboundSamlSsoProfile from a dict
inbound_saml_sso_profile_from_dict = InboundSamlSsoProfile.from_dict(inbound_saml_sso_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


