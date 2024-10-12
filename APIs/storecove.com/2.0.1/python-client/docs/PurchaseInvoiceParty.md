# PurchaseInvoiceParty

The party the goods/services were delivered to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the deliveyr party. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_party import PurchaseInvoiceParty

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceParty from a JSON string
purchase_invoice_party_instance = PurchaseInvoiceParty.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceParty.to_json())

# convert the object into a dict
purchase_invoice_party_dict = purchase_invoice_party_instance.to_dict()
# create an instance of PurchaseInvoiceParty from a dict
purchase_invoice_party_from_dict = PurchaseInvoiceParty.from_dict(purchase_invoice_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


