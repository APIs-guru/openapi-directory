# OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the return reason. | [optional] 
**reason** | **str** | [required] Reason for the return. Acceptable values are: - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option import OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption

# TODO update the JSON string below
json = "{}"
# create an instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption from a JSON string
orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option_instance = OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption.from_json(json)
# print the JSON string representation of the object
print(OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption.to_json())

# convert the object into a dict
orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option_dict = orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option_instance.to_dict()
# create an instance of OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption from a dict
orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option_from_dict = OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption.from_dict(orderinvoices_custom_batch_request_entry_create_refund_invoice_return_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


