# OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner

Other fees/charges details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | [**OBFeeFrequency1Code2**](OBFeeFrequency1Code2.md) |  | 
**calculation_frequency** | [**OBFeeFrequency1Code3**](OBFeeFrequency1Code3.md) |  | [optional] 
**fee_amount** | **str** | Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_applicable_range** | [**OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInnerFeeApplicableRange**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInnerFeeApplicableRange.md) |  | [optional] 
**fee_category** | [**OBFeeCategory1Code**](OBFeeCategory1Code.md) |  | 
**fee_charge_cap** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner]**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner.md) |  | [optional] 
**fee_rate** | **str** | Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | [**OBInterestRateType1Code1**](OBInterestRateType1Code1.md) |  | [optional] 
**fee_type** | [**OBFeeType1Code**](OBFeeType1Code.md) |  | 
**negotiable_indicator** | **bool** | Fee/charge which is usually negotiable rather than a fixed amount | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_application_frequency** | [**OBOtherCodeType16**](OBOtherCodeType16.md) |  | [optional] 
**other_calculation_frequency** | [**OBOtherCodeType17**](OBOtherCodeType17.md) |  | [optional] 
**other_fee_category_type** | [**OBOtherCodeType10**](OBOtherCodeType10.md) |  | [optional] 
**other_fee_rate_type** | [**OBOtherCodeType18**](OBOtherCodeType18.md) |  | [optional] 
**other_fee_type** | [**OBOtherFeeChargeDetailType**](OBOtherFeeChargeDetailType.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner import OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner_dict = ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner from a dict
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner.from_dict(ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_fee_charge_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


