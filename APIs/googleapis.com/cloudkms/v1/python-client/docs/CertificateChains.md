# CertificateChains

Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cavium_certs** | **List[str]** | Cavium certificate chain corresponding to the attestation. | [optional] 
**google_card_certs** | **List[str]** | Google card certificate chain corresponding to the attestation. | [optional] 
**google_partition_certs** | **List[str]** | Google partition certificate chain corresponding to the attestation. | [optional] 

## Example

```python
from openapi_client.models.certificate_chains import CertificateChains

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateChains from a JSON string
certificate_chains_instance = CertificateChains.from_json(json)
# print the JSON string representation of the object
print(CertificateChains.to_json())

# convert the object into a dict
certificate_chains_dict = certificate_chains_instance.to_dict()
# create an instance of CertificateChains from a dict
certificate_chains_from_dict = CertificateChains.from_dict(certificate_chains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


