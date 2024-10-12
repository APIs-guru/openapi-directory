# ShipmentInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_summary** | [**InvoiceSummary**](InvoiceSummary.md) |  | [optional] 
**line_item_invoices** | [**List[ShipmentInvoiceLineItemInvoice]**](ShipmentInvoiceLineItemInvoice.md) | [required] Invoice details per line item. | [optional] 
**shipment_group_id** | **str** | [required] ID of the shipment group. It is assigned by the merchant in the &#x60;shipLineItems&#x60; method and is used to group multiple line items that have the same kind of shipping charges. | [optional] 

## Example

```python
from openapi_client.models.shipment_invoice import ShipmentInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentInvoice from a JSON string
shipment_invoice_instance = ShipmentInvoice.from_json(json)
# print the JSON string representation of the object
print(ShipmentInvoice.to_json())

# convert the object into a dict
shipment_invoice_dict = shipment_invoice_instance.to_dict()
# create an instance of ShipmentInvoice from a dict
shipment_invoice_from_dict = ShipmentInvoice.from_dict(shipment_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


