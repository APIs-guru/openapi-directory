# OrdersInStoreRefundLineItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_pretax** | [**Price**](Price.md) |  | [optional] 
**amount_tax** | [**Price**](Price.md) |  | [optional] 
**line_item_id** | **str** | The ID of the line item to return. Either lineItemId or productId is required. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**product_id** | **str** | The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity to return and refund. | [optional] 
**reason** | **str** | The reason for the return. Acceptable values are: - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_in_store_refund_line_item_request import OrdersInStoreRefundLineItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersInStoreRefundLineItemRequest from a JSON string
orders_in_store_refund_line_item_request_instance = OrdersInStoreRefundLineItemRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersInStoreRefundLineItemRequest.to_json())

# convert the object into a dict
orders_in_store_refund_line_item_request_dict = orders_in_store_refund_line_item_request_instance.to_dict()
# create an instance of OrdersInStoreRefundLineItemRequest from a dict
orders_in_store_refund_line_item_request_from_dict = OrdersInStoreRefundLineItemRequest.from_dict(orders_in_store_refund_line_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


