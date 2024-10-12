# PurchaseInvoiceAllowanceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_excluding_tax** | **float** | The amount excluding tax. | [optional] 
**amount_excluding_vat** | **str** | DEPRECATED - use amount_excluding_tax. | [optional] 
**reason** | **str** | The reason for the allowance or charge. | [optional] 
**tax** | [**PurchaseInvoiceTax**](PurchaseInvoiceTax.md) |  | [optional] 
**vat** | [**PurchaseInvoiceVat**](PurchaseInvoiceVat.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_allowance_charge import PurchaseInvoiceAllowanceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceAllowanceCharge from a JSON string
purchase_invoice_allowance_charge_instance = PurchaseInvoiceAllowanceCharge.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceAllowanceCharge.to_json())

# convert the object into a dict
purchase_invoice_allowance_charge_dict = purchase_invoice_allowance_charge_instance.to_dict()
# create an instance of PurchaseInvoiceAllowanceCharge from a dict
purchase_invoice_allowance_charge_from_dict = PurchaseInvoiceAllowanceCharge.from_dict(purchase_invoice_allowance_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


