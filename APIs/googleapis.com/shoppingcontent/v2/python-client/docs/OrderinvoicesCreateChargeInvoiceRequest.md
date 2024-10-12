# OrderinvoicesCreateChargeInvoiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_id** | **str** | [required] The ID of the invoice. | [optional] 
**invoice_summary** | [**InvoiceSummary**](InvoiceSummary.md) |  | [optional] 
**line_item_invoices** | [**List[ShipmentInvoiceLineItemInvoice]**](ShipmentInvoiceLineItemInvoice.md) | [required] Invoice details per line item. | [optional] 
**operation_id** | **str** | [required] The ID of the operation, unique across all operations for a given order. | [optional] 
**shipment_group_id** | **str** | [required] ID of the shipment group. It is assigned by the merchant in the &#x60;shipLineItems&#x60; method and is used to group multiple line items that have the same kind of shipping charges. | [optional] 

## Example

```python
from openapi_client.models.orderinvoices_create_charge_invoice_request import OrderinvoicesCreateChargeInvoiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrderinvoicesCreateChargeInvoiceRequest from a JSON string
orderinvoices_create_charge_invoice_request_instance = OrderinvoicesCreateChargeInvoiceRequest.from_json(json)
# print the JSON string representation of the object
print(OrderinvoicesCreateChargeInvoiceRequest.to_json())

# convert the object into a dict
orderinvoices_create_charge_invoice_request_dict = orderinvoices_create_charge_invoice_request_instance.to_dict()
# create an instance of OrderinvoicesCreateChargeInvoiceRequest from a dict
orderinvoices_create_charge_invoice_request_from_dict = OrderinvoicesCreateChargeInvoiceRequest.from_dict(orderinvoices_create_charge_invoice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


