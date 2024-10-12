# PurchaseInvoiceInvoiceLinePrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_quantity** | **float** | The number of items the price is for. Can have up to digits. | [optional] 
**price_amount** | **float** | The price for one item, excluding VAT. Can have up to digits. | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_invoice_line_price import PurchaseInvoiceInvoiceLinePrice

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceInvoiceLinePrice from a JSON string
purchase_invoice_invoice_line_price_instance = PurchaseInvoiceInvoiceLinePrice.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceInvoiceLinePrice.to_json())

# convert the object into a dict
purchase_invoice_invoice_line_price_dict = purchase_invoice_invoice_line_price_instance.to_dict()
# create an instance of PurchaseInvoiceInvoiceLinePrice from a dict
purchase_invoice_invoice_line_price_from_dict = PurchaseInvoiceInvoiceLinePrice.from_dict(purchase_invoice_invoice_line_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


