# FeeChargeDetailInner

Other fees/charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | **str** | How frequently the fee/charge is applied to the account | 
**calculation_frequency** | **str** | How frequently the fee/charge is calculated | [optional] 
**fee_amount** | **str** | Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_applicable_range** | [**FeeApplicableRange**](FeeApplicableRange.md) |  | [optional] 
**fee_category** | **str** | Categorisation of fees and charges into standard categories. | 
**fee_charge_cap** | [**List[FeeChargeCapInner]**](FeeChargeCapInner.md) | Details about any caps (maximum charges) that apply to a particular or group of fee/charge | [optional] 
**fee_rate** | **str** | Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | **str** | Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_type** | **str** | Fee/Charge Type | 
**negotiable_indicator** | **bool** | Fee/charge which is usually negotiable rather than a fixed amount | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the fee/charge details. | [optional] 
**other_application_frequency** | [**OtherApplicationFrequency1**](OtherApplicationFrequency1.md) |  | [optional] 
**other_calculation_frequency** | [**OtherCalculationFrequency1**](OtherCalculationFrequency1.md) |  | [optional] 
**other_fee_category_type** | [**OtherFeeCategoryType**](OtherFeeCategoryType.md) |  | [optional] 
**other_fee_rate_type** | [**OtherFeeRateType**](OtherFeeRateType.md) |  | [optional] 
**other_fee_type** | [**OtherFeeType**](OtherFeeType.md) |  | [optional] 

## Example

```python
from openapi_client.models.fee_charge_detail_inner import FeeChargeDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of FeeChargeDetailInner from a JSON string
fee_charge_detail_inner_instance = FeeChargeDetailInner.from_json(json)
# print the JSON string representation of the object
print(FeeChargeDetailInner.to_json())

# convert the object into a dict
fee_charge_detail_inner_dict = fee_charge_detail_inner_instance.to_dict()
# create an instance of FeeChargeDetailInner from a dict
fee_charge_detail_inner_from_dict = FeeChargeDetailInner.from_dict(fee_charge_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


