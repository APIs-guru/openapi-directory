# LineAllowanceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_excluding_tax** | **float** | The amount for the allowance or charge, excluding tax. | 
**base_amount_excluding_tax** | **float** | The base amount for the allowance or charge, excluding tax. | [optional] 
**reason** | **str** | The reason for the allowance or charge, free text | [optional] 
**reason_code** | **str** | Do not use. Contact Storecove first if you want to use this field. | [optional] 

## Example

```python
from openapi_client.models.line_allowance_charge import LineAllowanceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of LineAllowanceCharge from a JSON string
line_allowance_charge_instance = LineAllowanceCharge.from_json(json)
# print the JSON string representation of the object
print(LineAllowanceCharge.to_json())

# convert the object into a dict
line_allowance_charge_dict = line_allowance_charge_instance.to_dict()
# create an instance of LineAllowanceCharge from a dict
line_allowance_charge_from_dict = LineAllowanceCharge.from_dict(line_allowance_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


