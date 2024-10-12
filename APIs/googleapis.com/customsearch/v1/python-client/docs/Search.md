# Search

Response to a custom search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **Dict[str, object]** | Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search. | [optional] 
**items** | [**List[Result]**](Result.md) | The current set of custom search results. | [optional] 
**kind** | **str** | Unique identifier for the type of current object. For this API, it is customsearch#search. | [optional] 
**promotions** | [**List[Promotion]**](Promotion.md) | The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine&#39;s configuration files define any promotions for the given query. | [optional] 
**queries** | [**SearchQueries**](SearchQueries.md) |  | [optional] 
**search_information** | [**SearchSearchInformation**](SearchSearchInformation.md) |  | [optional] 
**spelling** | [**SearchSpelling**](SearchSpelling.md) |  | [optional] 
**url** | [**SearchUrl**](SearchUrl.md) |  | [optional] 

## Example

```python
from openapi_client.models.search import Search

# TODO update the JSON string below
json = "{}"
# create an instance of Search from a JSON string
search_instance = Search.from_json(json)
# print the JSON string representation of the object
print(Search.to_json())

# convert the object into a dict
search_dict = search_instance.to_dict()
# create an instance of Search from a dict
search_from_dict = Search.from_dict(search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


