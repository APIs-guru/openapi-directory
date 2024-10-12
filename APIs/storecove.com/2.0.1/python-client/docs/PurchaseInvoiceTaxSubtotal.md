# PurchaseInvoiceTaxSubtotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_excluding_tax** | **float** | The amount excluding tax. | [optional] 
**amount_excluding_vat** | **str** | DEPRECATED - use amount_excluding_tax. | [optional] 
**tax** | [**PurchaseInvoiceTax**](PurchaseInvoiceTax.md) |  | [optional] 
**vat** | [**PurchaseInvoiceVat**](PurchaseInvoiceVat.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_tax_subtotal import PurchaseInvoiceTaxSubtotal

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceTaxSubtotal from a JSON string
purchase_invoice_tax_subtotal_instance = PurchaseInvoiceTaxSubtotal.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceTaxSubtotal.to_json())

# convert the object into a dict
purchase_invoice_tax_subtotal_dict = purchase_invoice_tax_subtotal_instance.to_dict()
# create an instance of PurchaseInvoiceTaxSubtotal from a dict
purchase_invoice_tax_subtotal_from_dict = PurchaseInvoiceTaxSubtotal.from_dict(purchase_invoice_tax_subtotal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


