# SearchSiteContent200ResponseGroceryProductsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_points** | [**List[SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner]**](SearchSiteContent200ResponseGroceryProductsInnerDataPointsInner.md) |  | [optional] 
**image** | **str** |  | 
**link** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.search_site_content200_response_grocery_products_inner import SearchSiteContent200ResponseGroceryProductsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSiteContent200ResponseGroceryProductsInner from a JSON string
search_site_content200_response_grocery_products_inner_instance = SearchSiteContent200ResponseGroceryProductsInner.from_json(json)
# print the JSON string representation of the object
print(SearchSiteContent200ResponseGroceryProductsInner.to_json())

# convert the object into a dict
search_site_content200_response_grocery_products_inner_dict = search_site_content200_response_grocery_products_inner_instance.to_dict()
# create an instance of SearchSiteContent200ResponseGroceryProductsInner from a dict
search_site_content200_response_grocery_products_inner_from_dict = SearchSiteContent200ResponseGroceryProductsInner.from_dict(search_site_content200_response_grocery_products_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


