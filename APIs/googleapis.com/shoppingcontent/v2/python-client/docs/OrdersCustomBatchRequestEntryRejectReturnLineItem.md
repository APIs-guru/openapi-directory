# OrdersCustomBatchRequestEntryRejectReturnLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item to return. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity to return and refund. | [optional] 
**reason** | **str** | The reason for the return. Acceptable values are: - \&quot;&#x60;damagedOrUsed&#x60;\&quot; - \&quot;&#x60;missingComponent&#x60;\&quot; - \&quot;&#x60;notEligible&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;outOfReturnWindow&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_reject_return_line_item import OrdersCustomBatchRequestEntryRejectReturnLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryRejectReturnLineItem from a JSON string
orders_custom_batch_request_entry_reject_return_line_item_instance = OrdersCustomBatchRequestEntryRejectReturnLineItem.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryRejectReturnLineItem.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_reject_return_line_item_dict = orders_custom_batch_request_entry_reject_return_line_item_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryRejectReturnLineItem from a dict
orders_custom_batch_request_entry_reject_return_line_item_from_dict = OrdersCustomBatchRequestEntryRejectReturnLineItem.from_dict(orders_custom_batch_request_entry_reject_return_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


