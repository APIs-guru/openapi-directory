# ReissueCertificateOrderRequest

Class representing certificate reissue request

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
from openapi_client.models.reissue_certificate_order_request import ReissueCertificateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReissueCertificateOrderRequest from a JSON string
reissue_certificate_order_request_instance = ReissueCertificateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(ReissueCertificateOrderRequest.to_json())

# convert the object into a dict
reissue_certificate_order_request_dict = reissue_certificate_order_request_instance.to_dict()
# create an instance of ReissueCertificateOrderRequest from a dict
reissue_certificate_order_request_from_dict = ReissueCertificateOrderRequest.from_dict(reissue_certificate_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


