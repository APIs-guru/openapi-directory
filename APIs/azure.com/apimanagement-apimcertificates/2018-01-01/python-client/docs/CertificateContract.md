# CertificateContract

Certificate details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CertificateContractProperties**](CertificateContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_contract import CertificateContract

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateContract from a JSON string
certificate_contract_instance = CertificateContract.from_json(json)
# print the JSON string representation of the object
print(CertificateContract.to_json())

# convert the object into a dict
certificate_contract_dict = certificate_contract_instance.to_dict()
# create an instance of CertificateContract from a dict
certificate_contract_from_dict = CertificateContract.from_dict(certificate_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


