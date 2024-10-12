# FeeChargeDetailInner

Other fees/charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | **str** | How frequently the fee/charge is applied to the account | 
**calculation_frequency** | **str** | How frequently the fee/charge is calculated | 
**fee_amount** | **str** | Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_applicable_range** | **object** | Range or amounts or rates for which the fee/charge applies | [optional] 
**fee_category** | **str** | Categorisation of fees and charges into standard categories. | 
**fee_rate** | **str** | Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | **str** | Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_type** | **str** | Fee/Charge Type | 
**included_in_monthly_charge_indicator** | **bool** | Indicates that fee/charge is already included in the monthly charge. | [optional] 
**negotiable_indicator** | **bool** | Fee/charge which is usually negotiable rather than a fixed amount | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the fee/charge details. | [optional] 
**other_application_frequency** | **object** | Other application frequencies not covered in the standard code list | [optional] 
**other_calculation_frequency** | **object** | Other calculation frequency which is not available in standard code set. | [optional] 
**other_fee_category** | **object** |  | [optional] 
**other_fee_rate_type** | **object** | Other fee rate type which is not available in the standard code set | [optional] 
**other_fee_type** | **object** | Other Fee/charge type which is not available in the standard code set | [optional] 

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


