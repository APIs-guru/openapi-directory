# OrderStatusRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**comment** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**fee** | **float** |  | [optional] 
**refunded_items** | [**List[OrderStatusRefundItem]**](OrderStatusRefundItem.md) |  | [optional] 
**shipping** | **float** |  | [optional] 
**tax** | **float** |  | [optional] 
**time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**total_refunded** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_status_refund import OrderStatusRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatusRefund from a JSON string
order_status_refund_instance = OrderStatusRefund.from_json(json)
# print the JSON string representation of the object
print(OrderStatusRefund.to_json())

# convert the object into a dict
order_status_refund_dict = order_status_refund_instance.to_dict()
# create an instance of OrderStatusRefund from a dict
order_status_refund_from_dict = OrderStatusRefund.from_dict(order_status_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


