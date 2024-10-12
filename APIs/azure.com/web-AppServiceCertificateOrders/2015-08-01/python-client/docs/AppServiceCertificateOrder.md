# AppServiceCertificateOrder

SSL certificate purchase order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | AppServiceCertificateOrder resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_certificate_order import AppServiceCertificateOrder

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateOrder from a JSON string
app_service_certificate_order_instance = AppServiceCertificateOrder.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateOrder.to_json())

# convert the object into a dict
app_service_certificate_order_dict = app_service_certificate_order_instance.to_dict()
# create an instance of AppServiceCertificateOrder from a dict
app_service_certificate_order_from_dict = AppServiceCertificateOrder.from_dict(app_service_certificate_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


