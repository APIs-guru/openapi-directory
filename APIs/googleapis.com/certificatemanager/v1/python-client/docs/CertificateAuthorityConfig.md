# CertificateAuthorityConfig

The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authority_service_config** | [**CertificateAuthorityServiceConfig**](CertificateAuthorityServiceConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_authority_config import CertificateAuthorityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAuthorityConfig from a JSON string
certificate_authority_config_instance = CertificateAuthorityConfig.from_json(json)
# print the JSON string representation of the object
print(CertificateAuthorityConfig.to_json())

# convert the object into a dict
certificate_authority_config_dict = certificate_authority_config_instance.to_dict()
# create an instance of CertificateAuthorityConfig from a dict
certificate_authority_config_from_dict = CertificateAuthorityConfig.from_dict(certificate_authority_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


