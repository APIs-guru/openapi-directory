# OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner

Details of capital repayment holiday if any

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_holiday_length** | **int** | The maximum length/duration of a Repayment Holiday | [optional] 
**max_holiday_period** | **str** | The unit of period (days, weeks, months etc.) of the repayment holiday | [optional] 
**notes** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner import OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner_dict = ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner from a dict
ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner.from_dict(ob_read_product2_data_product_inner_other_product_type_repayment_repayment_holiday_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


