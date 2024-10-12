# OrdersRejectReturnLineItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item to return. Either lineItemId or productId is required. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**product_id** | **str** | The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity to return and refund. | [optional] 
**reason** | **str** | The reason for the return. Acceptable values are: - \&quot;&#x60;damagedOrUsed&#x60;\&quot; - \&quot;&#x60;missingComponent&#x60;\&quot; - \&quot;&#x60;notEligible&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;outOfReturnWindow&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_reject_return_line_item_request import OrdersRejectReturnLineItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRejectReturnLineItemRequest from a JSON string
orders_reject_return_line_item_request_instance = OrdersRejectReturnLineItemRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersRejectReturnLineItemRequest.to_json())

# convert the object into a dict
orders_reject_return_line_item_request_dict = orders_reject_return_line_item_request_instance.to_dict()
# create an instance of OrdersRejectReturnLineItemRequest from a dict
orders_reject_return_line_item_request_from_dict = OrdersRejectReturnLineItemRequest.from_dict(orders_reject_return_line_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


