# CertificateOrderCertificate

Class representing the Key Vault container for certificate purchased through Azure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.certificate_order_certificate import CertificateOrderCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateOrderCertificate from a JSON string
certificate_order_certificate_instance = CertificateOrderCertificate.from_json(json)
# print the JSON string representation of the object
print(CertificateOrderCertificate.to_json())

# convert the object into a dict
certificate_order_certificate_dict = certificate_order_certificate_instance.to_dict()
# create an instance of CertificateOrderCertificate from a dict
certificate_order_certificate_from_dict = CertificateOrderCertificate.from_dict(certificate_order_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


