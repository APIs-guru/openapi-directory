# PurchaseInvoiceInvoiceLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **float** | The quantity of the item. Can have up to digits. | [optional] 
**unit_code** | **str** | The unit code of the quantity. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_invoice_line_item import PurchaseInvoiceInvoiceLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceInvoiceLineItem from a JSON string
purchase_invoice_invoice_line_item_instance = PurchaseInvoiceInvoiceLineItem.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceInvoiceLineItem.to_json())

# convert the object into a dict
purchase_invoice_invoice_line_item_dict = purchase_invoice_invoice_line_item_instance.to_dict()
# create an instance of PurchaseInvoiceInvoiceLineItem from a dict
purchase_invoice_invoice_line_item_from_dict = PurchaseInvoiceInvoiceLineItem.from_dict(purchase_invoice_invoice_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


