# OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the refund reason. | [optional] 
**reason** | **str** | [required] Reason for the refund. Acceptable values are: - \&quot;&#x60;adjustment&#x60;\&quot; - \&quot;&#x60;autoPostInternal&#x60;\&quot; - \&quot;&#x60;autoPostInvalidBillingAddress&#x60;\&quot; - \&quot;&#x60;autoPostNoInventory&#x60;\&quot; - \&quot;&#x60;autoPostPriceError&#x60;\&quot; - \&quot;&#x60;autoPostUndeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;couponAbuse&#x60;\&quot; - \&quot;&#x60;courtesyAdjustment&#x60;\&quot; - \&quot;&#x60;customerCanceled&#x60;\&quot; - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;customerSupportRequested&#x60;\&quot; - \&quot;&#x60;deliveredLateByCarrier&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;failToPushOrderGoogleError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantFulfillmentError&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchant&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchantOutOfStock&#x60;\&quot; - \&quot;&#x60;feeAdjustment&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;lateShipmentCredit&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;merchantDidNotShipOnTime&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;orderTimeout&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;paymentAbuse&#x60;\&quot; - \&quot;&#x60;paymentDeclined&#x60;\&quot; - \&quot;&#x60;priceAdjustment&#x60;\&quot; - \&quot;&#x60;priceError&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;promoReallocation&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;returnRefundAbuse&#x60;\&quot; - \&quot;&#x60;shippingCostAdjustment&#x60;\&quot; - \&quot;&#x60;shippingPriceError&#x60;\&quot; - \&quot;&#x60;taxAdjustment&#x60;\&quot; - \&quot;&#x60;taxError&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option import OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption

# TODO update the JSON string below
json = "{}"
# create an instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption from a JSON string
orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option_instance = OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption.from_json(json)
# print the JSON string representation of the object
print(OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption.to_json())

# convert the object into a dict
orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option_dict = orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option_instance.to_dict()
# create an instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption from a dict
orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option_from_dict = OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption.from_dict(orderinvoices_custom_batch_request_entry_create_refund_invoice_refund_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


