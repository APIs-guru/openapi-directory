# OrdersCustomBatchRequestEntryRefundItemItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 
**full_refund** | **bool** | If true, the full item will be refunded. If this is true, amount shouldn&#39;t be provided and will be ignored. | [optional] 
**line_item_id** | **str** | The ID of the line item. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The number of products that are refunded. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_refund_item_item import OrdersCustomBatchRequestEntryRefundItemItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryRefundItemItem from a JSON string
orders_custom_batch_request_entry_refund_item_item_instance = OrdersCustomBatchRequestEntryRefundItemItem.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryRefundItemItem.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_refund_item_item_dict = orders_custom_batch_request_entry_refund_item_item_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryRefundItemItem from a dict
orders_custom_batch_request_entry_refund_item_item_from_dict = OrdersCustomBatchRequestEntryRefundItemItem.from_dict(orders_custom_batch_request_entry_refund_item_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


