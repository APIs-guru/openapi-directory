# OrdersCustomBatchRequestEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**cancel** | [**OrdersCustomBatchRequestEntryCancel**](OrdersCustomBatchRequestEntryCancel.md) |  | [optional] 
**cancel_line_item** | [**OrdersCustomBatchRequestEntryCancelLineItem**](OrdersCustomBatchRequestEntryCancelLineItem.md) |  | [optional] 
**in_store_refund_line_item** | [**OrdersCustomBatchRequestEntryInStoreRefundLineItem**](OrdersCustomBatchRequestEntryInStoreRefundLineItem.md) |  | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**merchant_order_id** | **str** | The merchant order ID. Required for &#x60;updateMerchantOrderId&#x60; and &#x60;getByMerchantOrderId&#x60; methods. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;acknowledge&#x60;\&quot; - \&quot;&#x60;cancel&#x60;\&quot; - \&quot;&#x60;cancelLineItem&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;getByMerchantOrderId&#x60;\&quot; - \&quot;&#x60;inStoreRefundLineItem&#x60;\&quot; - \&quot;&#x60;refund&#x60;\&quot; - \&quot;&#x60;rejectReturnLineItem&#x60;\&quot; - \&quot;&#x60;returnLineItem&#x60;\&quot; - \&quot;&#x60;returnRefundLineItem&#x60;\&quot; - \&quot;&#x60;setLineItemMetadata&#x60;\&quot; - \&quot;&#x60;shipLineItems&#x60;\&quot; - \&quot;&#x60;updateLineItemShippingDetails&#x60;\&quot; - \&quot;&#x60;updateMerchantOrderId&#x60;\&quot; - \&quot;&#x60;updateShipment&#x60;\&quot;  | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. Required for all methods beside &#x60;get&#x60; and &#x60;getByMerchantOrderId&#x60;. | [optional] 
**order_id** | **str** | The ID of the order. Required for all methods beside &#x60;getByMerchantOrderId&#x60;. | [optional] 
**refund** | [**OrdersCustomBatchRequestEntryRefund**](OrdersCustomBatchRequestEntryRefund.md) |  | [optional] 
**reject_return_line_item** | [**OrdersCustomBatchRequestEntryRejectReturnLineItem**](OrdersCustomBatchRequestEntryRejectReturnLineItem.md) |  | [optional] 
**return_line_item** | [**OrdersCustomBatchRequestEntryReturnLineItem**](OrdersCustomBatchRequestEntryReturnLineItem.md) |  | [optional] 
**return_refund_line_item** | [**OrdersCustomBatchRequestEntryReturnRefundLineItem**](OrdersCustomBatchRequestEntryReturnRefundLineItem.md) |  | [optional] 
**set_line_item_metadata** | [**OrdersCustomBatchRequestEntrySetLineItemMetadata**](OrdersCustomBatchRequestEntrySetLineItemMetadata.md) |  | [optional] 
**ship_line_items** | [**OrdersCustomBatchRequestEntryShipLineItems**](OrdersCustomBatchRequestEntryShipLineItems.md) |  | [optional] 
**update_line_item_shipping_details** | [**OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails**](OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails.md) |  | [optional] 
**update_shipment** | [**OrdersCustomBatchRequestEntryUpdateShipment**](OrdersCustomBatchRequestEntryUpdateShipment.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry import OrdersCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntry from a JSON string
orders_custom_batch_request_entry_instance = OrdersCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntry.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_dict = orders_custom_batch_request_entry_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntry from a dict
orders_custom_batch_request_entry_from_dict = OrdersCustomBatchRequestEntry.from_dict(orders_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


