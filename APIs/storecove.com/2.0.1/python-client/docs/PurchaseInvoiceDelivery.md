# PurchaseInvoiceDelivery

The details of the delivery associated with this invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_date** | **str** | The actual delivery date. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**party** | [**PurchaseInvoiceParty**](PurchaseInvoiceParty.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_invoice_delivery import PurchaseInvoiceDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseInvoiceDelivery from a JSON string
purchase_invoice_delivery_instance = PurchaseInvoiceDelivery.from_json(json)
# print the JSON string representation of the object
print(PurchaseInvoiceDelivery.to_json())

# convert the object into a dict
purchase_invoice_delivery_dict = purchase_invoice_delivery_instance.to_dict()
# create an instance of PurchaseInvoiceDelivery from a dict
purchase_invoice_delivery_from_dict = PurchaseInvoiceDelivery.from_dict(purchase_invoice_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


