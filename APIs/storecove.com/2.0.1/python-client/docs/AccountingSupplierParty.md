# AccountingSupplierParty

The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | [**SenderParty**](SenderParty.md) |  | [optional] 

## Example

```python
from openapi_client.models.accounting_supplier_party import AccountingSupplierParty

# TODO update the JSON string below
json = "{}"
# create an instance of AccountingSupplierParty from a JSON string
accounting_supplier_party_instance = AccountingSupplierParty.from_json(json)
# print the JSON string representation of the object
print(AccountingSupplierParty.to_json())

# convert the object into a dict
accounting_supplier_party_dict = accounting_supplier_party_instance.to_dict()
# create an instance of AccountingSupplierParty from a dict
accounting_supplier_party_from_dict = AccountingSupplierParty.from_dict(accounting_supplier_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


