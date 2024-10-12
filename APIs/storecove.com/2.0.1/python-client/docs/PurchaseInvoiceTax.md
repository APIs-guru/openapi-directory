# PurchaseInvoiceTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tax** | [**PurchaseInvoiceTaxElement**](PurchaseInvoiceTaxElement.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_tax import PurchaseInvoiceTax

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceTax from a JSON string
purchase_invoice_tax_instance = PurchaseInvoiceTax.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceTax.to_json())

# convert the object into a dict
purchase_invoice_tax_dict = purchase_invoice_tax_instance.to_dict()
# create an instance of PurchaseInvoiceTax from a dict
purchase_invoice_tax_from_dict = PurchaseInvoiceTax.from_dict(purchase_invoice_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


