# PurchaseInvoiceVat

DEPRECATED - Use tax.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | The VAT country. | [optional] 
**percentage** | **str** | The VAT percentage. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_vat import PurchaseInvoiceVat

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceVat from a JSON string
purchase_invoice_vat_instance = PurchaseInvoiceVat.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceVat.to_json())

# convert the object into a dict
purchase_invoice_vat_dict = purchase_invoice_vat_instance.to_dict()
# create an instance of PurchaseInvoiceVat from a dict
purchase_invoice_vat_from_dict = PurchaseInvoiceVat.from_dict(purchase_invoice_vat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


