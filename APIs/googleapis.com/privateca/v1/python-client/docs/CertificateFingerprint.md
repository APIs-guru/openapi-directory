# CertificateFingerprint

A group of fingerprints for the x509 certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256_hash** | **str** | The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate. | [optional] 

## Example

```python
from openapi_client.models.certificate_fingerprint import CertificateFingerprint

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateFingerprint from a JSON string
certificate_fingerprint_instance = CertificateFingerprint.from_json(json)
# print the JSON string representation of the object
print(CertificateFingerprint.to_json())

# convert the object into a dict
certificate_fingerprint_dict = certificate_fingerprint_instance.to_dict()
# create an instance of CertificateFingerprint from a dict
certificate_fingerprint_from_dict = CertificateFingerprint.from_dict(certificate_fingerprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


