# DetailedProductInformationResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** |  | [optional] 
**media_asset** | [**DetailedProductInformationResultInnerAllOfMediaAsset**](DetailedProductInformationResultInnerAllOfMediaAsset.md) |  | [optional] 
**mktg_prd_type** | **str** |  | [optional] 
**product_category** | **List[str]** | Product category | [optional] 
**product_description** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_manufacturer** | **str** |  | [optional] 
**product_name** | **str** |  | [optional] 
**product_name_raw** | **str** |  | [optional] 
**product_on_market_date** | **str** |  | [optional] 
**product_picture** | **str** |  | [optional] 
**reference** | [**List[DetailedProductInformationResultInnerAllOfReferenceInner]**](DetailedProductInformationResultInnerAllOfReferenceInner.md) |  | [optional] 
**tech_spec** | [**List[DetailedProductInformationResultInnerAllOfTechSpecInner]**](DetailedProductInformationResultInnerAllOfTechSpecInner.md) | tech spec | [optional] 
**updated_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.detailed_product_information_result_inner import DetailedProductInformationResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of DetailedProductInformationResultInner from a JSON string
detailed_product_information_result_inner_instance = DetailedProductInformationResultInner.from_json(json)
# print the JSON string representation of the object
print(DetailedProductInformationResultInner.to_json())

# convert the object into a dict
detailed_product_information_result_inner_dict = detailed_product_information_result_inner_instance.to_dict()
# create an instance of DetailedProductInformationResultInner from a dict
detailed_product_information_result_inner_from_dict = DetailedProductInformationResultInner.from_dict(detailed_product_information_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


