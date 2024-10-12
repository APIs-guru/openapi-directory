# CustomHttpsConfiguration

Https settings for a domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_source** | **str** | Defines the source of the SSL certificate | 
**front_door_certificate_source_parameters** | [**FrontDoorCertificateSourceParameters**](FrontDoorCertificateSourceParameters.md) |  | [optional] 
**key_vault_certificate_source_parameters** | [**KeyVaultCertificateSourceParameters**](KeyVaultCertificateSourceParameters.md) |  | [optional] 
**minimum_tls_version** | **str** | The minimum TLS version required from the clients to establish an SSL handshake with Front Door. | 
**protocol_type** | **str** | Defines the TLS extension protocol that is used for secure delivery | 

## Example

```python
from openapi_client.models.custom_https_configuration import CustomHttpsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CustomHttpsConfiguration from a JSON string
custom_https_configuration_instance = CustomHttpsConfiguration.from_json(json)
# print the JSON string representation of the object
print(CustomHttpsConfiguration.to_json())

# convert the object into a dict
custom_https_configuration_dict = custom_https_configuration_instance.to_dict()
# create an instance of CustomHttpsConfiguration from a dict
custom_https_configuration_from_dict = CustomHttpsConfiguration.from_dict(custom_https_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


