# SearchPagedCollection

The type that defines the fields for a paginated result set. The response consists of 0 or more sequenced <em> pages</em> where each page has 0 or more items. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_corrections** | [**AutoCorrections**](AutoCorrections.md) |  | [optional] 
**href** | **str** | The URI of the current page of results. The following example of the search method returns items 1 thru 5 from the list of items found. https://api.ebay.com/buy/v1/item_summary/search?q&#x3D;shirt&amp;amp;limit&#x3D;5&amp;amp;offset&#x3D;0. | [optional] 
**item_summaries** | [**List[ItemSummary]**](ItemSummary.md) | An array of the items on this page. The items are sorted according to the sorting method specified in the request. | [optional] 
**limit** | **int** | The value of the limit parameter submitted in the request, which is the maximum number of items to return on a page, from the result set. A result set is the complete set of items returned by the method. | [optional] 
**next** | **str** | The URI for the next page of results. This value is returned if there is an additional page of results to return from the result set. The following example of the search method returns items 5 thru 10 from the list of items found. https://api.ebay.com/buy/v1/item_summary/search?query&#x3D;t-shirts&amp;amp;limit&#x3D;5&amp;amp;offset&#x3D;10 | [optional] 
**offset** | **int** | This value indicates the offset used for current page of items being returned. Assume the initial request used an offset of 0 and a limit of 3. Then in the first page of results, this value would be 0, and items 1-3 are returned. For the second page, this value is 3 and so on. | [optional] 
**prev** | **str** | The URI for the previous page of results. This is returned if there is a previous page of results from the result set. The following example of the search method returns items 1 thru 5 from the list of items found, which would be the first set of items returned. https://api.ebay.com/buy/v1/item_summary/search?query&#x3D;t-shirts&amp;amp;limit&#x3D;5&amp;amp;offset&#x3D;0 | [optional] 
**refinement** | [**Refinement**](Refinement.md) |  | [optional] 
**total** | **int** | The total number of items that match the input criteria. | [optional] 
**warnings** | [**List[Error]**](Error.md) | The container with all the warnings for the request. | [optional] 

## Example

```python
from openapi_client.models.search_paged_collection import SearchPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SearchPagedCollection from a JSON string
search_paged_collection_instance = SearchPagedCollection.from_json(json)
# print the JSON string representation of the object
print(SearchPagedCollection.to_json())

# convert the object into a dict
search_paged_collection_dict = search_paged_collection_instance.to_dict()
# create an instance of SearchPagedCollection from a dict
search_paged_collection_from_dict = SearchPagedCollection.from_dict(search_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


