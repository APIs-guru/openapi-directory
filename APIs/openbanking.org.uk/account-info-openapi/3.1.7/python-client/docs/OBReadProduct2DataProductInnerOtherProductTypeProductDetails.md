# OBReadProduct2DataProductInnerOtherProductTypeProductDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_free_length** | **int** | The length/duration of the fee free period | [optional] 
**fee_free_length_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 
**monthly_maximum_charge** | **str** | The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_segment** | [**OBOtherCodeType10**](OBOtherCodeType10.md) |  | [optional] 
**segment** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_product_details import OBReadProduct2DataProductInnerOtherProductTypeProductDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeProductDetails from a JSON string
ob_read_product2_data_product_inner_other_product_type_product_details_instance = OBReadProduct2DataProductInnerOtherProductTypeProductDetails.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeProductDetails.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_product_details_dict = ob_read_product2_data_product_inner_other_product_type_product_details_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeProductDetails from a dict
ob_read_product2_data_product_inner_other_product_type_product_details_from_dict = OBReadProduct2DataProductInnerOtherProductTypeProductDetails.from_dict(ob_read_product2_data_product_inner_other_product_type_product_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


