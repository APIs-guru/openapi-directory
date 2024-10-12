# TaxonomyCategories200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_name** | **str** | **natural-language name** of *this* product category | [optional] 
**group_url_name** | **str** | **URL-formatted name** of *this* product category | [optional] 
**id** | **int** | **unique numeric identifier** for the category | [optional] 
**product_count** | **int** | **number** of products in this category in the destination specified by &#x60;destId&#x60; - **note**: will be &#x60;null&#x60; if no &#x60;destId&#x60; is included in the query  | [optional] 
**subcategories** | [**List[TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner]**](TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner.md) | **array** of subcategory objects | [optional] 
**thumbnail_url** | **str** | **URL** for this category&#39;s thumbnail image, selected from the most popular product within the category - **note:** will be &#x60;null&#x60; if no &#x60;destId&#x60; is included in the query  | [optional] 

## Example

```python
from openapi_client.models.taxonomy_categories200_response_all_of_data_inner import TaxonomyCategories200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyCategories200ResponseAllOfDataInner from a JSON string
taxonomy_categories200_response_all_of_data_inner_instance = TaxonomyCategories200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(TaxonomyCategories200ResponseAllOfDataInner.to_json())

# convert the object into a dict
taxonomy_categories200_response_all_of_data_inner_dict = taxonomy_categories200_response_all_of_data_inner_instance.to_dict()
# create an instance of TaxonomyCategories200ResponseAllOfDataInner from a dict
taxonomy_categories200_response_all_of_data_inner_from_dict = TaxonomyCategories200ResponseAllOfDataInner.from_dict(taxonomy_categories200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


