# OrderRefundAddItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_product_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**quantity** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.order_refund_add_items_inner import OrderRefundAddItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefundAddItemsInner from a JSON string
order_refund_add_items_inner_instance = OrderRefundAddItemsInner.from_json(json)
# print the JSON string representation of the object
print(OrderRefundAddItemsInner.to_json())

# convert the object into a dict
order_refund_add_items_inner_dict = order_refund_add_items_inner_instance.to_dict()
# create an instance of OrderRefundAddItemsInner from a dict
order_refund_add_items_inner_from_dict = OrderRefundAddItemsInner.from_dict(order_refund_add_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


