# CertificateAttributes

Stores information about a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_template** | [**CertificateTemplate**](CertificateTemplate.md) |  | [optional] 
**fingerprint** | **str** | The encoded certificate fingerprint. | [optional] 
**issuer** | **str** | The name of the issuer of this certificate. | [optional] 
**serial_number** | **str** | Serial number of the certificate, Example: \&quot;123456789\&quot;. | [optional] 
**subject** | **str** | The subject name of this certificate. | [optional] 
**thumbprint** | **str** | The certificate thumbprint. | [optional] 
**validation_state** | **str** | Validation state of this certificate. | [optional] 
**validity_expiration_time** | **str** | Certificate not valid at or after this timestamp. | [optional] 
**validity_start_time** | **str** | Certificate not valid before this timestamp. | [optional] 

## Example

```python
from openapi_client.models.certificate_attributes import CertificateAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAttributes from a JSON string
certificate_attributes_instance = CertificateAttributes.from_json(json)
# print the JSON string representation of the object
print(CertificateAttributes.to_json())

# convert the object into a dict
certificate_attributes_dict = certificate_attributes_instance.to_dict()
# create an instance of CertificateAttributes from a dict
certificate_attributes_from_dict = CertificateAttributes.from_dict(certificate_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


