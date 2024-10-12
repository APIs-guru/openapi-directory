# SearchProductsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cat_id** | **int** | **unique numeric identifier** of *this* product category to search within - &#x60;categoryId&#x60; can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service - at present, it is not possible to use &#x60;catId&#x60; in conjunction with &#x60;seoId&#x60;  | [optional] 
**currency_code** | **str** | **currency** in which to display product prices | [optional] 
**dest_id** | **int** | **unique numeric identifier** of the destination in which to search for products - &#x60;destinationId&#x60; is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service - use **EITHER** &#x60;destId&#x60; **OR** &#x60;seoId&#x60;, but not both  | [optional] 
**end_date** | **str** | **end date delimiter** for the search (must be in the future) - e.g., &#x60;&#39;2019-10-21&#39;&#x60;  | [optional] 
**seo_id** | **str** | **search restriction specifier** for products associated with an attraction uniquely identified by &#x60;seoId&#x60; - use **EITHER** &#x60;destId&#x60; **OR** &#x60;seoId&#x60;, but not both  | [optional] 
**sort_order** | **str** | **sort order** in which to return the results that is *one of*:    - &#x60;\&quot;TOP_SELLERS\&quot;&#x60;: the top sellers   - &#x60;\&quot;REVIEW_AVG_RATING_A\&quot;&#x60;: ascending by average traveler rating (low -&amp;gt; high)   - &#x60;\&quot;REVIEW_AVG_RATING_D\&quot;&#x60;: descending by average traveler rating (high -&amp;gt; low)   - &#x60;\&quot;PRICE_FROM_A\&quot;&#x60;: ascending by price (low -&amp;gt; high)   - &#x60;\&quot;PRICE_FROM_D\&quot;&#x60;: descending by price (high -&amp;gt; low)   | [optional] 
**start_date** | **str** | **start date delimiter** for the search (must be in the future) - e.g., &#x60;&#39;2018-10-21&#39;&#x60;  | [optional] 
**sub_cat_id** | **int** | **unique numeric identifier** of *this* product subcategory to search within - &#x60;subcategoryId&#x60; can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service - at present, it is not possible to use &#x60;subCatId&#x60; in conjunction with &#x60;seoId&#x60;  | [optional] 
**top_x** | **str** | **start and end rows** to return in the format {start}-{end} - e.g. &#x60;&#39;1-10&#39;&#x60;, &#x60;&#39;11-20&#39;&#x60;  **Note**:  - the maximum number of rows per request is 100; therefore, &#x60;&#39;100-400&#39;&#x60; will return the same as &#x60;&#39;100-200&#39;&#x60; - if &#x60;topX&#x60; is not specified, the default is &#x60;&#39;1-100&#39;&#x60;  | [optional] 

## Example

```python
from openapi_client.models.search_products_request import SearchProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchProductsRequest from a JSON string
search_products_request_instance = SearchProductsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchProductsRequest.to_json())

# convert the object into a dict
search_products_request_dict = search_products_request_instance.to_dict()
# create an instance of SearchProductsRequest from a dict
search_products_request_from_dict = SearchProductsRequest.from_dict(search_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


