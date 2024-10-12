# CertificateOrder

Certificate purchase order

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
from openapi_client.models.certificate_order import CertificateOrder

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateOrder from a JSON string
certificate_order_instance = CertificateOrder.from_json(json)
# print the JSON string representation of the object
print(CertificateOrder.to_json())

# convert the object into a dict
certificate_order_dict = certificate_order_instance.to_dict()
# create an instance of CertificateOrder from a dict
certificate_order_from_dict = CertificateOrder.from_dict(certificate_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


