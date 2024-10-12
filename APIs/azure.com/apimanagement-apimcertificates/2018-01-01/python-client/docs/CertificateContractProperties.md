# CertificateContractProperties

Properties of the Certificate contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | Expiration date of the certificate. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**subject** | **str** | Subject attribute of the certificate. | 
**thumbprint** | **str** | Thumbprint of the certificate. | 

## Example

```python
from openapi_client.models.certificate_contract_properties import CertificateContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateContractProperties from a JSON string
certificate_contract_properties_instance = CertificateContractProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateContractProperties.to_json())

# convert the object into a dict
certificate_contract_properties_dict = certificate_contract_properties_instance.to_dict()
# create an instance of CertificateContractProperties from a dict
certificate_contract_properties_from_dict = CertificateContractProperties.from_dict(certificate_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


