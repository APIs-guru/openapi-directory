# ShipmentInvoiceLineItemInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | ID of the line item. Either lineItemId or productId must be set. | [optional] 
**product_id** | **str** | ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set. | [optional] 
**shipment_unit_ids** | **List[str]** | [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units). | [optional] 
**unit_invoice** | [**UnitInvoice**](UnitInvoice.md) |  | [optional] 

## Example

```python
from openapi_client.models.shipment_invoice_line_item_invoice import ShipmentInvoiceLineItemInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentInvoiceLineItemInvoice from a JSON string
shipment_invoice_line_item_invoice_instance = ShipmentInvoiceLineItemInvoice.from_json(json)
# print the JSON string representation of the object
print(ShipmentInvoiceLineItemInvoice.to_json())

# convert the object into a dict
shipment_invoice_line_item_invoice_dict = shipment_invoice_line_item_invoice_instance.to_dict()
# create an instance of ShipmentInvoiceLineItemInvoice from a dict
shipment_invoice_line_item_invoice_from_dict = ShipmentInvoiceLineItemInvoice.from_dict(shipment_invoice_line_item_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


