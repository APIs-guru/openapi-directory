# OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner

Details about any caps (minimum/maximum charges) that apply to a particular fee/charge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capping_period** | [**OBFeeFrequency1Code4**](OBFeeFrequency1Code4.md) |  | [optional] 
**fee_cap_amount** | **str** | Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_cap_occurrence** | **int** | fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount | [optional] 
**fee_type** | **List[str]** |  | 
**min_max_type** | [**OBMinMaxType1Code**](OBMinMaxType1Code.md) |  | 
**notes** | **List[str]** |  | [optional] 
**other_fee_type** | [**List[OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner]**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner import OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner_dict = ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner from a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInner.from_dict(ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_fees_charges_inner_loan_interest_fee_charge_cap_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


