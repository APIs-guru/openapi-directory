# OrdersRefundItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[OrdersCustomBatchRequestEntryRefundItemItem]**](OrdersCustomBatchRequestEntryRefundItemItem.md) | The items that are refunded. Either Item or Shipping must be provided in the request. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**reason** | **str** | The reason for the refund. Acceptable values are: - \&quot;&#x60;shippingCostAdjustment&#x60;\&quot; - \&quot;&#x60;priceAdjustment&#x60;\&quot; - \&quot;&#x60;taxAdjustment&#x60;\&quot; - \&quot;&#x60;feeAdjustment&#x60;\&quot; - \&quot;&#x60;courtesyAdjustment&#x60;\&quot; - \&quot;&#x60;adjustment&#x60;\&quot; - \&quot;&#x60;customerCancelled&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot; - \&quot;&#x60;lateShipmentCredit&#x60;\&quot; - \&quot;&#x60;deliveredLateByCarrier&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 
**shipping** | [**OrdersCustomBatchRequestEntryRefundItemShipping**](OrdersCustomBatchRequestEntryRefundItemShipping.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_refund_item_request import OrdersRefundItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRefundItemRequest from a JSON string
orders_refund_item_request_instance = OrdersRefundItemRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersRefundItemRequest.to_json())

# convert the object into a dict
orders_refund_item_request_dict = orders_refund_item_request_instance.to_dict()
# create an instance of OrdersRefundItemRequest from a dict
orders_refund_item_request_from_dict = OrdersRefundItemRequest.from_dict(orders_refund_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


