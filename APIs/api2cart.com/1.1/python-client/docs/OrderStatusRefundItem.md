# OrderStatusRefundItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**order_product_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**qty** | **float** |  | [optional] 
**refund** | **float** |  | [optional] 
**variant_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_status_refund_item import OrderStatusRefundItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatusRefundItem from a JSON string
order_status_refund_item_instance = OrderStatusRefundItem.from_json(json)
# print the JSON string representation of the object
print(OrderStatusRefundItem.to_json())

# convert the object into a dict
order_status_refund_item_dict = order_status_refund_item_instance.to_dict()
# create an instance of OrderStatusRefundItem from a dict
order_status_refund_item_from_dict = OrderStatusRefundItem.from_dict(order_status_refund_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


