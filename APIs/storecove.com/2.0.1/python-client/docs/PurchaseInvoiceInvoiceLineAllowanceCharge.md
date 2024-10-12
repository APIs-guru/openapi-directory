# PurchaseInvoiceInvoiceLineAllowanceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of the allowance or charge. | [optional] 
**reason** | **str** | The reason for the allowance or charge. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_invoice_line_allowance_charge import PurchaseInvoiceInvoiceLineAllowanceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceInvoiceLineAllowanceCharge from a JSON string
purchase_invoice_invoice_line_allowance_charge_instance = PurchaseInvoiceInvoiceLineAllowanceCharge.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceInvoiceLineAllowanceCharge.to_json())

# convert the object into a dict
purchase_invoice_invoice_line_allowance_charge_dict = purchase_invoice_invoice_line_allowance_charge_instance.to_dict()
# create an instance of PurchaseInvoiceInvoiceLineAllowanceCharge from a dict
purchase_invoice_invoice_line_allowance_charge_from_dict = PurchaseInvoiceInvoiceLineAllowanceCharge.from_dict(purchase_invoice_invoice_line_allowance_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


