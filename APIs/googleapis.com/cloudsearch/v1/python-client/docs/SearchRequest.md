# SearchRequest

The search API request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_attributes** | [**List[ContextAttribute]**](ContextAttribute.md) | Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10. | [optional] 
**data_source_restrictions** | [**List[DataSourceRestriction]**](DataSourceRestriction.md) | The sources to use for querying. If not specified, all data sources from the current search application are used. | [optional] 
**facet_options** | [**List[FacetOptions]**](FacetOptions.md) |  | [optional] 
**page_size** | **int** | Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested. | [optional] 
**query** | **str** | The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299) | [optional] 
**query_interpretation_options** | [**QueryInterpretationOptions**](QueryInterpretationOptions.md) |  | [optional] 
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 
**sort_options** | [**SortOptions**](SortOptions.md) |  | [optional] 
**start** | **int** | Starting index of the results. | [optional] 

## Example

```python
from openapi_client.models.search_request import SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequest from a JSON string
search_request_instance = SearchRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRequest.to_json())

# convert the object into a dict
search_request_dict = search_request_instance.to_dict()
# create an instance of SearchRequest from a dict
search_request_from_dict = SearchRequest.from_dict(search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


