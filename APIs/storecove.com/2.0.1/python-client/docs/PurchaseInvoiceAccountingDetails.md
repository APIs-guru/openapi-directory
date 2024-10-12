# PurchaseInvoiceAccountingDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The the code of the general ledger account. | [optional] 
**list** | **str** | The name of the list for the code, e.g. \&quot;RGS\&quot;. | [optional] 
**list_version** | **str** | The version of the list for the code, e.g. \&quot;1.1\&quot;. | [optional] 
**name** | **str** | A textual description of the code. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_accounting_details import PurchaseInvoiceAccountingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceAccountingDetails from a JSON string
purchase_invoice_accounting_details_instance = PurchaseInvoiceAccountingDetails.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceAccountingDetails.to_json())

# convert the object into a dict
purchase_invoice_accounting_details_dict = purchase_invoice_accounting_details_instance.to_dict()
# create an instance of PurchaseInvoiceAccountingDetails from a dict
purchase_invoice_accounting_details_from_dict = PurchaseInvoiceAccountingDetails.from_dict(purchase_invoice_accounting_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


