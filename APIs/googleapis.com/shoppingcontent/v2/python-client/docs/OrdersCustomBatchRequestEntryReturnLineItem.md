# OrdersCustomBatchRequestEntryReturnLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item to return. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity to return. | [optional] 
**reason** | **str** | The reason for the return. Acceptable values are: - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_return_line_item import OrdersCustomBatchRequestEntryReturnLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryReturnLineItem from a JSON string
orders_custom_batch_request_entry_return_line_item_instance = OrdersCustomBatchRequestEntryReturnLineItem.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryReturnLineItem.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_return_line_item_dict = orders_custom_batch_request_entry_return_line_item_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryReturnLineItem from a dict
orders_custom_batch_request_entry_return_line_item_from_dict = OrdersCustomBatchRequestEntryReturnLineItem.from_dict(orders_custom_batch_request_entry_return_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


