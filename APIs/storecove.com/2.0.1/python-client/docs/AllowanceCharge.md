# AllowanceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_excluding_tax** | **float** | The amount for the allowance or charge, excluding tax. | [optional] 
**amount_excluding_vat** | **float** | DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT. | [optional] 
**amount_including_tax** | **float** | The amount for the allowance or charge, including tax. | [optional] 
**base_amount_excluding_tax** | **float** | The base amount for the allowance or charge, excluding tax. | [optional] 
**base_amount_including_tax** | **float** | The base amount for the allowance or charge, including tax. | [optional] 
**reason** | **str** | The reason for the allowance or charge, free text | [optional] [default to 'Agreed settlement']
**reason_code** | **str** | Do not use. Contact Storecove first if you want to use this field. | [optional] 
**tax** | [**Tax**](Tax.md) |  | [optional] 
**taxes_duties_fees** | [**List[Tax]**](Tax.md) | An array of taxes, duties and fees for this invoice line. At this moment, multiple Tax items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array. | [optional] 

## Example

```python
from openapi_client.models.allowance_charge import AllowanceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of AllowanceCharge from a JSON string
allowance_charge_instance = AllowanceCharge.from_json(json)
# print the JSON string representation of the object
print(AllowanceCharge.to_json())

# convert the object into a dict
allowance_charge_dict = allowance_charge_instance.to_dict()
# create an instance of AllowanceCharge from a dict
allowance_charge_from_dict = AllowanceCharge.from_dict(allowance_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


