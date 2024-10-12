# CertificateConfig

A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | [**PublicKey**](PublicKey.md) |  | [optional] 
**subject_config** | [**SubjectConfig**](SubjectConfig.md) |  | [optional] 
**subject_key_id** | [**CertificateConfigKeyId**](CertificateConfigKeyId.md) |  | [optional] 
**x509_config** | [**X509Parameters**](X509Parameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_config import CertificateConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateConfig from a JSON string
certificate_config_instance = CertificateConfig.from_json(json)
# print the JSON string representation of the object
print(CertificateConfig.to_json())

# convert the object into a dict
certificate_config_dict = certificate_config_instance.to_dict()
# create an instance of CertificateConfig from a dict
certificate_config_from_dict = CertificateConfig.from_dict(certificate_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


