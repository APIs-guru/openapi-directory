# InvoiceItemPurchaseDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tax_inclusive** | **bool** | Amounts are including tax | [optional] 
**tax_rate** | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
**unit_of_measure** | **str** | Description of the unit type the item is sold as, ie: kg, hour. | [optional] 
**unit_price** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.invoice_item_purchase_details import InvoiceItemPurchaseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItemPurchaseDetails from a JSON string
invoice_item_purchase_details_instance = InvoiceItemPurchaseDetails.from_json(json)
# print the JSON string representation of the object
print(InvoiceItemPurchaseDetails.to_json())

# convert the object into a dict
invoice_item_purchase_details_dict = invoice_item_purchase_details_instance.to_dict()
# create an instance of InvoiceItemPurchaseDetails from a dict
invoice_item_purchase_details_from_dict = InvoiceItemPurchaseDetails.from_dict(invoice_item_purchase_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


