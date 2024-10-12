# OtherFeesChargesInner

Contains details of fees and charges which are not associated with either Overdraft or features/benefits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_charge_cap** | [**List[FeeChargeCapInner]**](FeeChargeCapInner.md) | Details about any caps (maximum charges) that apply to a particular or group of fee/charge | [optional] 
**fee_charge_detail** | [**List[FeeChargeDetailInner]**](FeeChargeDetailInner.md) | Other fees/charges details | 
**other_tariff_type** | [**OtherTariffType**](OtherTariffType.md) |  | [optional] 
**tariff_name** | **str** | Name of the tariff | [optional] 
**tariff_type** | **str** | TariffType which defines the fee and charges. | [optional] 

## Example

```python
from openapi_client.models.other_fees_charges_inner import OtherFeesChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeesChargesInner from a JSON string
other_fees_charges_inner_instance = OtherFeesChargesInner.from_json(json)
# print the JSON string representation of the object
print(OtherFeesChargesInner.to_json())

# convert the object into a dict
other_fees_charges_inner_dict = other_fees_charges_inner_instance.to_dict()
# create an instance of OtherFeesChargesInner from a dict
other_fees_charges_inner_from_dict = OtherFeesChargesInner.from_dict(other_fees_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


