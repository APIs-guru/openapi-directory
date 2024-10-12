# CertificateDetails

SSL certificate details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer** | **str** | Certificate Issuer. | [optional] [readonly] 
**not_after** | **datetime** | Date Certificate is valid to. | [optional] [readonly] 
**not_before** | **datetime** | Date Certificate is valid from. | [optional] [readonly] 
**raw_data** | **str** | Raw certificate data. | [optional] [readonly] 
**serial_number** | **str** | Certificate Serial Number. | [optional] [readonly] 
**signature_algorithm** | **str** | Certificate Signature algorithm. | [optional] [readonly] 
**subject** | **str** | Certificate Subject. | [optional] [readonly] 
**thumbprint** | **str** | Certificate Thumbprint. | [optional] [readonly] 
**version** | **int** | Certificate Version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_details import CertificateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateDetails from a JSON string
certificate_details_instance = CertificateDetails.from_json(json)
# print the JSON string representation of the object
print(CertificateDetails.to_json())

# convert the object into a dict
certificate_details_dict = certificate_details_instance.to_dict()
# create an instance of CertificateDetails from a dict
certificate_details_from_dict = CertificateDetails.from_dict(certificate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


