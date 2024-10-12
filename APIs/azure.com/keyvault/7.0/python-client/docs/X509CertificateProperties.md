# X509CertificateProperties

Properties of the X509 component of a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ekus** | **List[str]** | The enhanced key usage. | [optional] 
**key_usage** | **List[str]** | List of key usages. | [optional] 
**sans** | [**SubjectAlternativeNames**](SubjectAlternativeNames.md) |  | [optional] 
**subject** | **str** | The subject name. Should be a valid X509 distinguished Name. | [optional] 
**validity_months** | **int** | The duration that the certificate is valid in months. | [optional] 

## Example

```python
from openapi_client.models.x509_certificate_properties import X509CertificateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of X509CertificateProperties from a JSON string
x509_certificate_properties_instance = X509CertificateProperties.from_json(json)
# print the JSON string representation of the object
print(X509CertificateProperties.to_json())

# convert the object into a dict
x509_certificate_properties_dict = x509_certificate_properties_instance.to_dict()
# create an instance of X509CertificateProperties from a dict
x509_certificate_properties_from_dict = X509CertificateProperties.from_dict(x509_certificate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


