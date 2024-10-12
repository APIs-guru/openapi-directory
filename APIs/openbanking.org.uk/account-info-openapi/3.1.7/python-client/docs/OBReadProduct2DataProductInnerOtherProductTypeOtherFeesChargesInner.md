# OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner

Contains details of fees and charges which are not associated with either Overdraft or features/benefits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_charge_cap** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner]**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeCapInner.md) |  | [optional] 
**fee_charge_detail** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner]**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerFeeChargeDetailInner.md) |  | 
**other_tariff_type** | [**OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerOtherTariffType**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInnerOtherTariffType.md) |  | [optional] 
**tariff_name** | **str** | Name of the tariff | [optional] 
**tariff_type** | **str** | TariffType which defines the fee and charges. | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner import OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_dict = ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner from a dict
ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner.from_dict(ob_read_product2_data_product_inner_other_product_type_other_fees_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


