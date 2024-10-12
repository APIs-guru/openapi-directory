# CertificateAuthorityServiceConfig

Contains information required to contact CA service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_pool** | **str** | Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form \&quot;projects/{project}/locations/{location}/caPools/{ca_pool}\&quot;. | [optional] 

## Example

```python
from openapi_client.models.certificate_authority_service_config import CertificateAuthorityServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAuthorityServiceConfig from a JSON string
certificate_authority_service_config_instance = CertificateAuthorityServiceConfig.from_json(json)
# print the JSON string representation of the object
print(CertificateAuthorityServiceConfig.to_json())

# convert the object into a dict
certificate_authority_service_config_dict = certificate_authority_service_config_instance.to_dict()
# create an instance of CertificateAuthorityServiceConfig from a dict
certificate_authority_service_config_from_dict = CertificateAuthorityServiceConfig.from_dict(certificate_authority_service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


