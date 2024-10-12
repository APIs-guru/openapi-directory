# DomainSecuritySettings

Domain Security Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ntlm_v1** | **str** | A flag to determine whether or not NtlmV1 is enabled or disabled. | [optional] 
**sync_ntlm_passwords** | **str** | A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. | [optional] 
**tls_v1** | **str** | A flag to determine whether or not TlsV1 is enabled or disabled. | [optional] 

## Example

```python
from openapi_client.models.domain_security_settings import DomainSecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of DomainSecuritySettings from a JSON string
domain_security_settings_instance = DomainSecuritySettings.from_json(json)
# print the JSON string representation of the object
print(DomainSecuritySettings.to_json())

# convert the object into a dict
domain_security_settings_dict = domain_security_settings_instance.to_dict()
# create an instance of DomainSecuritySettings from a dict
domain_security_settings_from_dict = DomainSecuritySettings.from_dict(domain_security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


