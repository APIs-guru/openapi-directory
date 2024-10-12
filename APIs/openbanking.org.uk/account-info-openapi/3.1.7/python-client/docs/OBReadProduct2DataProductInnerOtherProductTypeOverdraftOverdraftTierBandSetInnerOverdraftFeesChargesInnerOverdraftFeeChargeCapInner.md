# OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner

Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capping_period** | [**OBPeriod1Code**](OBPeriod1Code.md) |  | [optional] 
**fee_cap_amount** | **str** | Cap amount charged for a fee/charge | [optional] 
**fee_cap_occurrence** | **int** | Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. | [optional] 
**fee_type** | **List[str]** |  | 
**min_max_type** | [**OBMinMaxType1Code**](OBMinMaxType1Code.md) |  | 
**notes** | **List[str]** |  | [optional] 
**other_fee_type** | [**List[OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner]**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInnerLoanInterestFeeChargeCapInnerOtherFeeTypeInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner import OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner_dict = ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner from a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner.from_dict(ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_cap_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


