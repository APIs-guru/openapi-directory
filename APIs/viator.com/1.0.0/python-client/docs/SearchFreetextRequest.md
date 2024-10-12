# SearchFreetextRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** for the currency in which to display product pricing information | [optional] 
**dest_id** | **int** | **unique numeric identifier** of the destination to search within  - &#x60;destinationId&#x60; can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service  | [optional] 
**search_types** | **List[str]** | **array** of search domain specifiers where each item is *one of*:   - &#x60;\&quot;PRODUCT\&quot;&#x60;: a tour / activity   - &#x60;\&quot;DESTINATION\&quot;&#x60;: continent, country, city, region   - &#x60;\&quot;ATTRACTION\&quot;&#x60;: an attraction within a destination (only available to partners with SEO access)   - &#x60;\&quot;RECOMMENDATION\&quot;&#x60;: an attraction within a destination (only available to partners with SEO access)  | [optional] 
**sort_order** | [**SortOrder**](SortOrder.md) |  | [optional] 
**text** | **str** | **text** to search for | [optional] 
**top_x** | **str** | **start and end rows** to return in the format {start}-{end} - e.g. &#x60;&#39;1-10&#39;&#x60;, &#x60;&#39;11-20&#39;&#x60;  **Note**:  - the maximum number of rows per request is 100; therefore, &#x60;&#39;100-400&#39;&#x60; will return the same as &#x60;&#39;100-200&#39;&#x60; - if &#x60;topX&#x60; is not specified, the default is &#x60;&#39;1-100&#39;&#x60;  | [optional] 

## Example

```python
from openapi_client.models.search_freetext_request import SearchFreetextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFreetextRequest from a JSON string
search_freetext_request_instance = SearchFreetextRequest.from_json(json)
# print the JSON string representation of the object
print(SearchFreetextRequest.to_json())

# convert the object into a dict
search_freetext_request_dict = search_freetext_request_instance.to_dict()
# create an instance of SearchFreetextRequest from a dict
search_freetext_request_from_dict = SearchFreetextRequest.from_dict(search_freetext_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


