# OrdersCancelLineItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**amount_pretax** | [**Price**](Price.md) |  | [optional] 
**amount_tax** | [**Price**](Price.md) |  | [optional] 
**line_item_id** | **str** | The ID of the line item to cancel. Either lineItemId or productId is required. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**product_id** | **str** | The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity to cancel. | [optional] 
**reason** | **str** | The reason for the cancellation. Acceptable values are: - \&quot;&#x60;customerInitiatedCancel&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;priceError&#x60;\&quot; - \&quot;&#x60;shippingPriceError&#x60;\&quot; - \&quot;&#x60;taxError&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_cancel_line_item_request import OrdersCancelLineItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCancelLineItemRequest from a JSON string
orders_cancel_line_item_request_instance = OrdersCancelLineItemRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersCancelLineItemRequest.to_json())

# convert the object into a dict
orders_cancel_line_item_request_dict = orders_cancel_line_item_request_instance.to_dict()
# create an instance of OrdersCancelLineItemRequest from a dict
orders_cancel_line_item_request_from_dict = OrdersCancelLineItemRequest.from_dict(orders_cancel_line_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


