# UnitInvoiceAdditionalCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_charge_amount** | [**Amount**](Amount.md) |  | [optional] 
**additional_charge_promotions** | [**List[Promotion]**](Promotion.md) | Deprecated. | [optional] 
**type** | **str** | [required] Type of the additional charge. Acceptable values are: - \&quot;&#x60;shipping&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.unit_invoice_additional_charge import UnitInvoiceAdditionalCharge

# TODO update the JSON string below
json = "{}"
# create an instance of UnitInvoiceAdditionalCharge from a JSON string
unit_invoice_additional_charge_instance = UnitInvoiceAdditionalCharge.from_json(json)
# print the JSON string representation of the object
print(UnitInvoiceAdditionalCharge.to_json())

# convert the object into a dict
unit_invoice_additional_charge_dict = unit_invoice_additional_charge_instance.to_dict()
# create an instance of UnitInvoiceAdditionalCharge from a dict
unit_invoice_additional_charge_from_dict = UnitInvoiceAdditionalCharge.from_dict(unit_invoice_additional_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


