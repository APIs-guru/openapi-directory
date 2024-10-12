# CertificateVerificationDescription

The JSON-serialized leaf certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | base-64 representation of X509 certificate .cer file or just .pem file content. | [optional] 

## Example

```python
from openapi_client.models.certificate_verification_description import CertificateVerificationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateVerificationDescription from a JSON string
certificate_verification_description_instance = CertificateVerificationDescription.from_json(json)
# print the JSON string representation of the object
print(CertificateVerificationDescription.to_json())

# convert the object into a dict
certificate_verification_description_dict = certificate_verification_description_instance.to_dict()
# create an instance of CertificateVerificationDescription from a dict
certificate_verification_description_from_dict = CertificateVerificationDescription.from_dict(certificate_verification_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


