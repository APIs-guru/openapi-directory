# OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner

Details about the fees/charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | [**OBFeeFrequency1Code0**](OBFeeFrequency1Code0.md) |  | 
**calculation_frequency** | [**OBFeeFrequency1Code1**](OBFeeFrequency1Code1.md) |  | [optional] 
**fee_amount** | **str** | Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_rate** | **str** | Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | [**OBInterestRateType1Code0**](OBInterestRateType1Code0.md) |  | [optional] 
**fee_type** | [**OBOverdraftFeeType1Code**](OBOverdraftFeeType1Code.md) |  | 
**incremental_borrowing_amount** | **str** | Every additional tranche of an overdraft balance to which an overdraft fee is applied | [optional] 
**negotiable_indicator** | **bool** | Indicates whether fee and charges are negotiable | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_application_frequency** | [**OBOtherCodeType11**](OBOtherCodeType11.md) |  | [optional] 
**other_calculation_frequency** | [**OBOtherCodeType12**](OBOtherCodeType12.md) |  | [optional] 
**other_fee_rate_type** | [**OBOtherCodeType14**](OBOtherCodeType14.md) |  | [optional] 
**other_fee_type** | [**OBOtherCodeType13**](OBOtherCodeType13.md) |  | [optional] 
**overdraft_control_indicator** | **bool** | Indicates if the fee/charge is already covered by an &#39;Overdraft Control&#39; fee or not. | [optional] 
**overdraft_fee_charge_cap** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner]**](OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner import OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner_dict = ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner from a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInnerOverdraftFeeChargeDetailInner.from_dict(ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_overdraft_fees_charges_inner_overdraft_fee_charge_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


