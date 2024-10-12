# PurchaseInvoiceDocumentTotals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payable** | **float** | The total invoice amount payable including tax. | [optional] 
**prepaid** | **float** | The amount already paid. | [optional] 
**rounding** | **float** | The difference between the payable amount and the total invoice amount including tax. | [optional] 
**total** | **float** | The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_document_totals import PurchaseInvoiceDocumentTotals

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceDocumentTotals from a JSON string
purchase_invoice_document_totals_instance = PurchaseInvoiceDocumentTotals.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceDocumentTotals.to_json())

# convert the object into a dict
purchase_invoice_document_totals_dict = purchase_invoice_document_totals_instance.to_dict()
# create an instance of PurchaseInvoiceDocumentTotals from a dict
purchase_invoice_document_totals_from_dict = PurchaseInvoiceDocumentTotals.from_dict(purchase_invoice_document_totals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


