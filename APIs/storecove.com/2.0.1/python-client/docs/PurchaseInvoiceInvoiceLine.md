# PurchaseInvoiceInvoiceLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting** | [**PurchaseInvoiceAccountingDetails**](PurchaseInvoiceAccountingDetails.md) |  | [optional] 
**allowance_charge** | **float** | DEPRECATED - use allowance_charges. | [optional] 
**allowance_charge_array** | [**List[PurchaseInvoiceInvoiceLineAllowanceCharge]**](PurchaseInvoiceInvoiceLineAllowanceCharge.md) |  | [optional] 
**allowance_charges** | **List[float]** | Deprecated. | [optional] 
**amount_excluding_tax** | **float** | The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges. | [optional] 
**amount_excluding_vat** | **float** | DEPRECATED - use amount_excluding_tax. The amount excluding VAT. | [optional] 
**description** | **str** | The description for the invoice line. | [optional] 
**name** | **str** | A short name for the invoice line. | [optional] 
**period_end** | **str** | The end date of the period this invoice line relates to. Format \&quot;YYYY-MM-DD\&quot;. | [optional] 
**period_start** | **str** | The start date of the period this invoice line relates to. Format \&quot;YYYY-MM-DD\&quot;. | [optional] 
**price** | [**PurchaseInvoiceInvoiceLinePrice**](PurchaseInvoiceInvoiceLinePrice.md) |  | [optional] 
**tax** | [**PurchaseInvoiceTax**](PurchaseInvoiceTax.md) |  | [optional] 
**units** | [**PurchaseInvoiceInvoiceLineItem**](PurchaseInvoiceInvoiceLineItem.md) |  | [optional] 
**vat** | [**VATDetails**](VATDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_invoice_line import PurchaseInvoiceInvoiceLine

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceInvoiceLine from a JSON string
purchase_invoice_invoice_line_instance = PurchaseInvoiceInvoiceLine.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceInvoiceLine.to_json())

# convert the object into a dict
purchase_invoice_invoice_line_dict = purchase_invoice_invoice_line_instance.to_dict()
# create an instance of PurchaseInvoiceInvoiceLine from a dict
purchase_invoice_invoice_line_from_dict = PurchaseInvoiceInvoiceLine.from_dict(purchase_invoice_invoice_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


