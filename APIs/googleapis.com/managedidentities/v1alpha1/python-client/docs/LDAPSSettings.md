# LDAPSSettings

LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**Certificate**](Certificate.md) |  | [optional] 
**certificate_password** | **str** | Input only. The password used to encrypt the uploaded pfx certificate. | [optional] 
**certificate_pfx** | **bytearray** | Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID&#x3D;1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1. | [optional] 
**name** | **str** | The resource name of the LDAPS settings. Uses the form: &#x60;projects/{project}/locations/{location}/domains/{domain}&#x60;. | [optional] 
**state** | **str** | Output only. The current state of this LDAPS settings. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ldaps_settings import LDAPSSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LDAPSSettings from a JSON string
ldaps_settings_instance = LDAPSSettings.from_json(json)
# print the JSON string representation of the object
print(LDAPSSettings.to_json())

# convert the object into a dict
ldaps_settings_dict = ldaps_settings_instance.to_dict()
# create an instance of LDAPSSettings from a dict
ldaps_settings_from_dict = LDAPSSettings.from_dict(ldaps_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


