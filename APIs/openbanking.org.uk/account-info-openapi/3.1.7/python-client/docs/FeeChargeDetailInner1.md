# FeeChargeDetailInner1

Other fees/charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | **str** | How frequently the fee/charge is applied to the account | 
**calculation_frequency** | **str** | How frequently the fee/charge is calculated | [optional] 
**fee_amount** | **str** | Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_applicable_range** | [**FeeApplicableRange**](FeeApplicableRange.md) |  | [optional] 
**fee_category** | **str** | Categorisation of fees and charges into standard categories. | 
**fee_charge_cap** | [**List[FeeChargeCapInner1]**](FeeChargeCapInner1.md) | Details about any caps (maximum charges) that apply to a particular fee/charge | [optional] 
**fee_rate** | **str** | Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | **str** | Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_type** | **str** | Fee/Charge Type | 
**notes** | **List[str]** | Optional additional notes to supplement the fee/charge details. | [optional] 
**other_application_frequency** | [**OtherApplicationFrequency1**](OtherApplicationFrequency1.md) |  | [optional] 
**other_calculation_frequency** | [**OtherCalculationFrequency1**](OtherCalculationFrequency1.md) |  | [optional] 
**other_fee_category_type** | [**OtherFeeCategoryType**](OtherFeeCategoryType.md) |  | [optional] 
**other_fee_rate_type** | [**OtherFeeRateType**](OtherFeeRateType.md) |  | [optional] 
**other_fee_type** | [**OtherFeeType**](OtherFeeType.md) |  | [optional] 

## Example

```python
from openapi_client.models.fee_charge_detail_inner1 import FeeChargeDetailInner1

# TODO update the JSON string below
json = "{}"
# create an instance of FeeChargeDetailInner1 from a JSON string
fee_charge_detail_inner1_instance = FeeChargeDetailInner1.from_json(json)
# print the JSON string representation of the object
print(FeeChargeDetailInner1.to_json())

# convert the object into a dict
fee_charge_detail_inner1_dict = fee_charge_detail_inner1_instance.to_dict()
# create an instance of FeeChargeDetailInner1 from a dict
fee_charge_detail_inner1_from_dict = FeeChargeDetailInner1.from_dict(fee_charge_detail_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


