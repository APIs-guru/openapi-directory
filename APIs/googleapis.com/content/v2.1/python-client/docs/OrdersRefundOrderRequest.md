# OrdersRefundOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) |  | [optional] 
**full_refund** | **bool** | If true, the full order will be refunded, including shipping. If this is true, amount shouldn&#39;t be provided and will be ignored. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**reason** | **str** | The reason for the refund. Acceptable values are: - \&quot;&#x60;courtesyAdjustment&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_refund_order_request import OrdersRefundOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRefundOrderRequest from a JSON string
orders_refund_order_request_instance = OrdersRefundOrderRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersRefundOrderRequest.to_json())

# convert the object into a dict
orders_refund_order_request_dict = orders_refund_order_request_instance.to_dict()
# create an instance of OrdersRefundOrderRequest from a dict
orders_refund_order_request_from_dict = OrdersRefundOrderRequest.from_dict(orders_refund_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


