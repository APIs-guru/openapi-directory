# RenewCertificateOrderRequest

Class representing certificate renew request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | RenewCertificateOrderRequest resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.renew_certificate_order_request import RenewCertificateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenewCertificateOrderRequest from a JSON string
renew_certificate_order_request_instance = RenewCertificateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(RenewCertificateOrderRequest.to_json())

# convert the object into a dict
renew_certificate_order_request_dict = renew_certificate_order_request_instance.to_dict()
# create an instance of RenewCertificateOrderRequest from a dict
renew_certificate_order_request_from_dict = RenewCertificateOrderRequest.from_dict(renew_certificate_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


