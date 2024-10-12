# OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner

Details about specific fees/charges that are applied for repayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_frequency** | [**OBFeeFrequency1Code2**](OBFeeFrequency1Code2.md) |  | 
**calculation_frequency** | [**OBFeeFrequency1Code3**](OBFeeFrequency1Code3.md) |  | 
**fee_amount** | **str** | Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) | [optional] 
**fee_rate** | **str** | Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) | [optional] 
**fee_rate_type** | [**OBInterestRateType1Code1**](OBInterestRateType1Code1.md) |  | [optional] 
**fee_type** | [**OBFeeType1Code**](OBFeeType1Code.md) |  | 
**negotiable_indicator** | **bool** | Fee/charge which is usually negotiable rather than a fixed amount | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_application_frequency** | [**OBOtherCodeType16**](OBOtherCodeType16.md) |  | [optional] 
**other_calculation_frequency** | [**OBOtherCodeType17**](OBOtherCodeType17.md) |  | [optional] 
**other_fee_rate_type** | [**OBOtherCodeType18**](OBOtherCodeType18.md) |  | [optional] 
**other_fee_type** | [**OBOtherFeeChargeDetailType**](OBOtherFeeChargeDetailType.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner import OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner_dict = ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner from a dict
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailInner.from_dict(ob_read_product2_data_product_inner_other_product_type_repayment_repayment_fee_charges_repayment_fee_charge_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


