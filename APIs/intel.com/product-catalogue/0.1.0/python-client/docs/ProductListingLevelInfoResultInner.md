# ProductListingLevelInfoResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** |  | [optional] 
**highlights_info** | [**List[ProductListingLevelInfoResultInnerHighlightsInfoInner]**](ProductListingLevelInfoResultInnerHighlightsInfoInner.md) |  | [optional] 
**mktg_prd_type** | **str** |  | [optional] 
**product_category** | **List[str]** | Multiple product category | [optional] 
**product_description** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_manufacturer** | **str** |  | [optional] 
**product_name** | **str** |  | [optional] 
**product_name_raw** | **str** |  | [optional] 
**product_on_market_date** | **str** |  | [optional] 
**updated_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_listing_level_info_result_inner import ProductListingLevelInfoResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListingLevelInfoResultInner from a JSON string
product_listing_level_info_result_inner_instance = ProductListingLevelInfoResultInner.from_json(json)
# print the JSON string representation of the object
print(ProductListingLevelInfoResultInner.to_json())

# convert the object into a dict
product_listing_level_info_result_inner_dict = product_listing_level_info_result_inner_instance.to_dict()
# create an instance of ProductListingLevelInfoResultInner from a dict
product_listing_level_info_result_inner_from_dict = ProductListingLevelInfoResultInner.from_dict(product_listing_level_info_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


