# CertificateRawData

An SSL certificate obtained from a certificate authority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_key** | **str** | Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: -----BEGIN RSA PRIVATE KEY----- -----END RSA PRIVATE KEY----- @InputOnly | [optional] 
**public_certificate** | **str** | PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: -----BEGIN CERTIFICATE----- -----END CERTIFICATE-----  | [optional] 

## Example

```python
from openapi_client.models.certificate_raw_data import CertificateRawData

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRawData from a JSON string
certificate_raw_data_instance = CertificateRawData.from_json(json)
# print the JSON string representation of the object
print(CertificateRawData.to_json())

# convert the object into a dict
certificate_raw_data_dict = certificate_raw_data_instance.to_dict()
# create an instance of CertificateRawData from a dict
certificate_raw_data_from_dict = CertificateRawData.from_dict(certificate_raw_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


