# OBReadProduct2DataProductInnerOtherProductTypeRepayment

Repayment details of the Loan product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_type** | **str** | The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_amount_type** | [**OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherAmountType**](OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherAmountType.md) |  | [optional] 
**other_repayment_frequency** | [**OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentFrequency**](OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentFrequency.md) |  | [optional] 
**other_repayment_type** | [**OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentType**](OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentType.md) |  | [optional] 
**repayment_fee_charges** | [**OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges**](OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges.md) |  | [optional] 
**repayment_frequency** | **str** | Repayment frequency | [optional] 
**repayment_holiday** | [**List[OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner]**](OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner.md) |  | [optional] 
**repayment_type** | **str** | Repayment type | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_repayment import OBReadProduct2DataProductInnerOtherProductTypeRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepayment from a JSON string
ob_read_product2_data_product_inner_other_product_type_repayment_instance = OBReadProduct2DataProductInnerOtherProductTypeRepayment.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeRepayment.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_repayment_dict = ob_read_product2_data_product_inner_other_product_type_repayment_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepayment from a dict
ob_read_product2_data_product_inner_other_product_type_repayment_from_dict = OBReadProduct2DataProductInnerOtherProductTypeRepayment.from_dict(ob_read_product2_data_product_inner_other_product_type_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


