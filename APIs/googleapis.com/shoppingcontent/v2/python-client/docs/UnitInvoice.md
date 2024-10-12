# UnitInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_charges** | [**List[UnitInvoiceAdditionalCharge]**](UnitInvoiceAdditionalCharge.md) | Additional charges for a unit, e.g. shipping costs. | [optional] 
**promotions** | [**List[Promotion]**](Promotion.md) | Deprecated. | [optional] 
**unit_price_pretax** | [**Price**](Price.md) |  | [optional] 
**unit_price_taxes** | [**List[UnitInvoiceTaxLine]**](UnitInvoiceTaxLine.md) | Tax amounts to apply to the unit price. | [optional] 

## Example

```python
from openapi_client.models.unit_invoice import UnitInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of UnitInvoice from a JSON string
unit_invoice_instance = UnitInvoice.from_json(json)
# print the JSON string representation of the object
print(UnitInvoice.to_json())

# convert the object into a dict
unit_invoice_dict = unit_invoice_instance.to_dict()
# create an instance of UnitInvoice from a dict
unit_invoice_from_dict = UnitInvoice.from_dict(unit_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


