# SearchFreetextResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_type** | **str** | **indicator** of the entity type for *this* result that is *one of*:   - &#x60;\&quot;PRODUCT\&quot;&#x60;: a tour / activity   - &#x60;\&quot;DESTINATION\&quot;&#x60;: continent, country, city, region   - &#x60;\&quot;ATTRACTION\&quot;&#x60;: an attraction within a destination (only available to partners with SEO access)   - &#x60;\&quot;RECOMMENDATION\&quot;&#x60;: an attraction within a destination (only available to partners with SEO access)  | [optional] 
**sort_order** | **int** | **sort order** for *this* data object | [optional] 

## Example

```python
from openapi_client.models.search_freetext_response import SearchFreetextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFreetextResponse from a JSON string
search_freetext_response_instance = SearchFreetextResponse.from_json(json)
# print the JSON string representation of the object
print(SearchFreetextResponse.to_json())

# convert the object into a dict
search_freetext_response_dict = search_freetext_response_instance.to_dict()
# create an instance of SearchFreetextResponse from a dict
search_freetext_response_from_dict = SearchFreetextResponse.from_dict(search_freetext_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


