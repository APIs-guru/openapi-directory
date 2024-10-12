# CertificateBundle

A certificate bundle consists of a certificate (X509) plus its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**cer** | **bytearray** | CER contents of x509 certificate. | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**id** | **str** | The certificate id. | [optional] [readonly] 
**kid** | **str** | The key id. | [optional] [readonly] 
**policy** | [**CertificatePolicy**](CertificatePolicy.md) |  | [optional] 
**sid** | **str** | The secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] 
**x5t** | **str** | Thumbprint of the certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_bundle import CertificateBundle

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateBundle from a JSON string
certificate_bundle_instance = CertificateBundle.from_json(json)
# print the JSON string representation of the object
print(CertificateBundle.to_json())

# convert the object into a dict
certificate_bundle_dict = certificate_bundle_instance.to_dict()
# create an instance of CertificateBundle from a dict
certificate_bundle_from_dict = CertificateBundle.from_dict(certificate_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


