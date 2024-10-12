# OrderRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**comment** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**fee** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**items** | [**List[OrderStatusRefundItem]**](OrderStatusRefundItem.md) |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**shipping** | **float** |  | [optional] 
**tax** | **float** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_refund import OrderRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefund from a JSON string
order_refund_instance = OrderRefund.from_json(json)
# print the JSON string representation of the object
print(OrderRefund.to_json())

# convert the object into a dict
order_refund_dict = order_refund_instance.to_dict()
# create an instance of OrderRefund from a dict
order_refund_from_dict = OrderRefund.from_dict(order_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


