# OrderinvoicesCreateRefundInvoiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_id** | **str** | [required] The ID of the invoice. | [optional] 
**operation_id** | **str** | [required] The ID of the operation, unique across all operations for a given order. | [optional] 
**refund_only_option** | [**OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption**](OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption.md) |  | [optional] 
**return_option** | [**OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption**](OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption.md) |  | [optional] 
**shipment_invoices** | [**List[ShipmentInvoice]**](ShipmentInvoice.md) | Invoice details for different shipment groups. | [optional] 

## Example

```python
from openapi_client.models.orderinvoices_create_refund_invoice_request import OrderinvoicesCreateRefundInvoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrderinvoicesCreateRefundInvoiceRequest from a JSON string
orderinvoices_create_refund_invoice_request_instance = OrderinvoicesCreateRefundInvoiceRequest.from_json(json)
# print the JSON string representation of the object
print(OrderinvoicesCreateRefundInvoiceRequest.to_json())

# convert the object into a dict
orderinvoices_create_refund_invoice_request_dict = orderinvoices_create_refund_invoice_request_instance.to_dict()
# create an instance of OrderinvoicesCreateRefundInvoiceRequest from a dict
orderinvoices_create_refund_invoice_request_from_dict = OrderinvoicesCreateRefundInvoiceRequest.from_dict(orderinvoices_create_refund_invoice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


