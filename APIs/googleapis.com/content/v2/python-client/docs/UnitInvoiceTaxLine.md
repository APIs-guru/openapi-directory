# UnitInvoiceTaxLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tax_amount** | [**Price**](Price.md) |  | [optional] 
**tax_name** | **str** | Optional name of the tax type. This should only be provided if &#x60;taxType&#x60; is &#x60;otherFeeTax&#x60;. | [optional] 
**tax_type** | **str** | [required] Type of the tax. Acceptable values are: - \&quot;&#x60;otherFee&#x60;\&quot; - \&quot;&#x60;otherFeeTax&#x60;\&quot; - \&quot;&#x60;sales&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.unit_invoice_tax_line import UnitInvoiceTaxLine

# TODO update the JSON string below
json = "{}"
# create an instance of UnitInvoiceTaxLine from a JSON string
unit_invoice_tax_line_instance = UnitInvoiceTaxLine.from_json(json)
# print the JSON string representation of the object
print(UnitInvoiceTaxLine.to_json())

# convert the object into a dict
unit_invoice_tax_line_dict = unit_invoice_tax_line_instance.to_dict()
# create an instance of UnitInvoiceTaxLine from a dict
unit_invoice_tax_line_from_dict = UnitInvoiceTaxLine.from_dict(unit_invoice_tax_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


