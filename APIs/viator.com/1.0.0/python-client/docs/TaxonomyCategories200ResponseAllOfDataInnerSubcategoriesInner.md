# TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **int** | **unique numeric identifier** of *this* product category | [optional] 
**sortorder** | **int** | **sort order** (suggested) of the subcategory within the category | [optional] 
**sub_category_url_name** | **str** | **URL-formatted name** of *this* product subcategory | [optional] 
**subcategory_id** | **int** | **unique numeric identifier** of *this* product subcategory | [optional] 
**subcategory_name** | **str** | **natural-language name** of *this* product subcategory | [optional] 

## Example

```python
from openapi_client.models.taxonomy_categories200_response_all_of_data_inner_subcategories_inner import TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner from a JSON string
taxonomy_categories200_response_all_of_data_inner_subcategories_inner_instance = TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner.from_json(json)
# print the JSON string representation of the object
print(TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner.to_json())

# convert the object into a dict
taxonomy_categories200_response_all_of_data_inner_subcategories_inner_dict = taxonomy_categories200_response_all_of_data_inner_subcategories_inner_instance.to_dict()
# create an instance of TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner from a dict
taxonomy_categories200_response_all_of_data_inner_subcategories_inner_from_dict = TaxonomyCategories200ResponseAllOfDataInnerSubcategoriesInner.from_dict(taxonomy_categories200_response_all_of_data_inner_subcategories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


