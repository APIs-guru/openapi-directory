# CertificateDescription

A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aia_issuing_certificate_urls** | **List[str]** | Describes lists of issuer CA certificate URLs that appear in the \&quot;Authority Information Access\&quot; extension in the certificate. | [optional] 
**authority_key_id** | [**KeyId**](KeyId.md) |  | [optional] 
**cert_fingerprint** | [**CertificateFingerprint**](CertificateFingerprint.md) |  | [optional] 
**crl_distribution_points** | **List[str]** | Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13 | [optional] 
**public_key** | [**PublicKey**](PublicKey.md) |  | [optional] 
**subject_description** | [**SubjectDescription**](SubjectDescription.md) |  | [optional] 
**subject_key_id** | [**KeyId**](KeyId.md) |  | [optional] 
**x509_description** | [**X509Parameters**](X509Parameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_description import CertificateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateDescription from a JSON string
certificate_description_instance = CertificateDescription.from_json(json)
# print the JSON string representation of the object
print(CertificateDescription.to_json())

# convert the object into a dict
certificate_description_dict = certificate_description_instance.to_dict()
# create an instance of CertificateDescription from a dict
certificate_description_from_dict = CertificateDescription.from_dict(certificate_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


