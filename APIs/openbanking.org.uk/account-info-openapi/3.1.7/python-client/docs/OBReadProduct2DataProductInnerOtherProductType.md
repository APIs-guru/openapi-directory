# OBReadProduct2DataProductInnerOtherProductType

Other product type details associated with the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_interest** | [**OBReadProduct2DataProductInnerOtherProductTypeCreditInterest**](OBReadProduct2DataProductInnerOtherProductTypeCreditInterest.md) |  | [optional] 
**description** | **str** | Description of the Product associated with the account | 
**loan_interest** | [**OBReadProduct2DataProductInnerOtherProductTypeLoanInterest**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterest.md) |  | [optional] 
**name** | **str** | Long name associated with the product | 
**other_fees_charges** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner]**](OBReadProduct2DataProductInnerOtherProductTypeOtherFeesChargesInner.md) |  | [optional] 
**overdraft** | [**OBReadProduct2DataProductInnerOtherProductTypeOverdraft**](OBReadProduct2DataProductInnerOtherProductTypeOverdraft.md) |  | [optional] 
**product_details** | [**OBReadProduct2DataProductInnerOtherProductTypeProductDetails**](OBReadProduct2DataProductInnerOtherProductTypeProductDetails.md) |  | [optional] 
**repayment** | [**OBReadProduct2DataProductInnerOtherProductTypeRepayment**](OBReadProduct2DataProductInnerOtherProductTypeRepayment.md) |  | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type import OBReadProduct2DataProductInnerOtherProductType

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductType from a JSON string
ob_read_product2_data_product_inner_other_product_type_instance = OBReadProduct2DataProductInnerOtherProductType.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductType.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_dict = ob_read_product2_data_product_inner_other_product_type_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductType from a dict
ob_read_product2_data_product_inner_other_product_type_from_dict = OBReadProduct2DataProductInnerOtherProductType.from_dict(ob_read_product2_data_product_inner_other_product_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


