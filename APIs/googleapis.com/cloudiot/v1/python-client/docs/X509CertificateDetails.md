# X509CertificateDetails

Details of an X.509 certificate. For informational purposes only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **str** | The time the certificate becomes invalid. | [optional] 
**issuer** | **str** | The entity that signed the certificate. | [optional] 
**public_key_type** | **str** | The type of public key in the certificate. | [optional] 
**signature_algorithm** | **str** | The algorithm used to sign the certificate. | [optional] 
**start_time** | **str** | The time the certificate becomes valid. | [optional] 
**subject** | **str** | The entity the certificate and public key belong to. | [optional] 

## Example

```python
from openapi_client.models.x509_certificate_details import X509CertificateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of X509CertificateDetails from a JSON string
x509_certificate_details_instance = X509CertificateDetails.from_json(json)
# print the JSON string representation of the object
print(X509CertificateDetails.to_json())

# convert the object into a dict
x509_certificate_details_dict = x509_certificate_details_instance.to_dict()
# create an instance of X509CertificateDetails from a dict
x509_certificate_details_from_dict = X509CertificateDetails.from_dict(x509_certificate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


