# LdapsSettings

Secure LDAP Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_not_after** | **datetime** | NotAfter DateTime of configure ldaps certificate. | [optional] [readonly] 
**certificate_thumbprint** | **str** | Thumbprint of configure ldaps certificate. | [optional] [readonly] 
**external_access** | **str** | A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled. | [optional] 
**external_access_ip_address** | **str** | External access ip address. | [optional] [readonly] 
**ldaps** | **str** | A flag to determine whether or not Secure LDAP is enabled or disabled. | [optional] 
**pfx_certificate** | **str** | The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file. | [optional] 
**pfx_certificate_password** | **str** | The password to decrypt the provided Secure LDAP certificate pfx file. | [optional] 
**public_certificate** | **str** | Public certificate used to configure secure ldap. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ldaps_settings import LdapsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LdapsSettings from a JSON string
ldaps_settings_instance = LdapsSettings.from_json(json)
# print the JSON string representation of the object
print(LdapsSettings.to_json())

# convert the object into a dict
ldaps_settings_dict = ldaps_settings_instance.to_dict()
# create an instance of LdapsSettings from a dict
ldaps_settings_from_dict = LdapsSettings.from_dict(ldaps_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


