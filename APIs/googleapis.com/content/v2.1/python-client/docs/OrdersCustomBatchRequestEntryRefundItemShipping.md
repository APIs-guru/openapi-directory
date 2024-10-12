# OrdersCustomBatchRequestEntryRefundItemShipping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**full_refund** | **bool** | If set to true, all shipping costs for the order will be refunded. If this is true, amount shouldn&#39;t be provided and will be ignored. If set to false, submit the amount of the partial shipping refund, excluding the shipping tax. The shipping tax is calculated and handled on Google&#39;s side. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_refund_item_shipping import OrdersCustomBatchRequestEntryRefundItemShipping

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryRefundItemShipping from a JSON string
orders_custom_batch_request_entry_refund_item_shipping_instance = OrdersCustomBatchRequestEntryRefundItemShipping.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryRefundItemShipping.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_refund_item_shipping_dict = orders_custom_batch_request_entry_refund_item_shipping_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryRefundItemShipping from a dict
orders_custom_batch_request_entry_refund_item_shipping_from_dict = OrdersCustomBatchRequestEntryRefundItemShipping.from_dict(orders_custom_batch_request_entry_refund_item_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


