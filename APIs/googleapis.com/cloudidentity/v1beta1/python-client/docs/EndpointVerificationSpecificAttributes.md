# EndpointVerificationSpecificAttributes

Resource representing the [Endpoint Verification-specific attributes](https://cloud.google.com/endpoint-verification/docs/device-information) of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_signals** | **Dict[str, object]** | Additional signals reported by Endpoint Verification. It includes the following attributes: 1. Non-configurable attributes: hotfixes, av_installed, av_enabled, windows_domain_name, is_os_native_firewall_enabled, and is_secure_boot_enabled. 2. Configurable attributes: file_config, registry_config, and plist_config. | [optional] 
**browser_attributes** | [**List[BrowserAttributes]**](BrowserAttributes.md) | Details of browser profiles reported by Endpoint Verification. | [optional] 
**certificate_attributes** | [**List[CertificateAttributes]**](CertificateAttributes.md) | Details of certificates. | [optional] 

## Example

```python
from openapi_client.models.endpoint_verification_specific_attributes import EndpointVerificationSpecificAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointVerificationSpecificAttributes from a JSON string
endpoint_verification_specific_attributes_instance = EndpointVerificationSpecificAttributes.from_json(json)
# print the JSON string representation of the object
print(EndpointVerificationSpecificAttributes.to_json())

# convert the object into a dict
endpoint_verification_specific_attributes_dict = endpoint_verification_specific_attributes_instance.to_dict()
# create an instance of EndpointVerificationSpecificAttributes from a dict
endpoint_verification_specific_attributes_from_dict = EndpointVerificationSpecificAttributes.from_dict(endpoint_verification_specific_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


