# TaxonomyAttractions200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attraction_city** | **str** | **name** of the city in which the attraction is located | [optional] 
**attraction_latitude** | **float** | **latitude component** of the attraction&#39;s location | [optional] 
**attraction_longitude** | **float** | **longitude component** of the attraction&#39;s location | [optional] 
**attraction_state** | **str** | **name** of the state in which the attraction is located | [optional] 
**attraction_street_address** | **str** | **street address** of the attraction | [optional] 
**destination_id** | **int** | **unique numeric identifier** of the the destination associated with the attraction | [optional] 
**page_url_name** | **str** | **URL-formatted title** of the attraction page | [optional] 
**photo_count** | **int** | **number** of user photos published for the attraction | [optional] 
**primary_destination_id** | **int** | **unique numeric identifier** of the attraction&#39;s primary destination | [optional] 
**primary_destination_name** | **str** | **natural-language name** of the attraction&#39;s primary destination | [optional] 
**primary_destination_url_name** | **str** | **URL-formatted name** of the destination associated with *this* attraction | [optional] 
**product_count** | **int** | **number** of products associated with the attraction | [optional] 
**published_date** | **str** | **conventionally-formatted date** on which the attraction was listed | [optional] 
**rating** | **float** | **average user rating** of the attraction | [optional] 
**seo_id** | **int** | **unique numeric identifier** of the attraction - use as an input for [/search/products](#operation/searchProducts)  | [optional] 
**sort_order** | **int** | **sort order** of *this* listing | [optional] 
**thumbnail_hi_res_url** | **str** | **URL** for the attraction&#39;s high-resolution thumbnail image | [optional] 
**thumbnail_url** | **str** | **URL** the attraction&#39;s thumbnail image | [optional] 
**title** | **str** | **natural-language title** of the attraction | [optional] 
**web_url** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.taxonomy_attractions200_response_all_of_data_inner import TaxonomyAttractions200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyAttractions200ResponseAllOfDataInner from a JSON string
taxonomy_attractions200_response_all_of_data_inner_instance = TaxonomyAttractions200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(TaxonomyAttractions200ResponseAllOfDataInner.to_json())

# convert the object into a dict
taxonomy_attractions200_response_all_of_data_inner_dict = taxonomy_attractions200_response_all_of_data_inner_instance.to_dict()
# create an instance of TaxonomyAttractions200ResponseAllOfDataInner from a dict
taxonomy_attractions200_response_all_of_data_inner_from_dict = TaxonomyAttractions200ResponseAllOfDataInner.from_dict(taxonomy_attractions200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


