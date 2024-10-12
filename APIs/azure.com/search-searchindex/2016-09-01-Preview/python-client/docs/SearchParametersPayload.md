# SearchParametersPayload

Parameters for filtering, sorting, faceting, paging, and other search query behaviors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **bool** | A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation. | [optional] 
**facets** | **List[str]** | The list of facet expressions to apply to the search query. Each facet expression contains a field name, optionally followed by a comma-separated list of name:value pairs. | [optional] 
**filter** | **str** | The OData $filter expression to apply to the search query. | [optional] 
**highlight** | **str** | The comma-separated list of field names to use for hit highlights. Only searchable fields can be used for hit highlighting. | [optional] 
**highlight_post_tag** | **str** | A string tag that is appended to hit highlights. Must be set with HighlightPreTag. Default is &amp;lt;/em&amp;gt;. | [optional] 
**highlight_pre_tag** | **str** | A string tag that is prepended to hit highlights. Must be set with HighlightPostTag. Default is &amp;lt;em&amp;gt;. | [optional] 
**minimum_coverage** | **float** | A number between 0 and 100 indicating the percentage of the index that must be covered by a search query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 100. | [optional] 
**orderby** | **str** | The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to the geo.distance() function. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 Orderby clauses. | [optional] 
**query_type** | [**QueryType**](QueryType.md) |  | [optional] 
**scoring_parameters** | **List[str]** | The list of parameter values to be used in scoring functions (for example, referencePointParameter) using the format name:value. For example, if the scoring profile defines a function with a parameter called &#39;mylocation&#39; the parameter string would be \&quot;mylocation:-122.2,44.8\&quot;(without the quotes). | [optional] 
**scoring_profile** | **str** | The name of a scoring profile to evaluate match scores for matching documents in order to sort the results. | [optional] 
**search** | **str** | A full-text search query expression; Use null or \&quot;*\&quot; to match all documents. | [optional] 
**search_fields** | **str** | The comma-separated list of field names to include in the full-text search. | [optional] 
**search_mode** | [**SearchMode**](SearchMode.md) |  | [optional] 
**select** | **str** | The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. | [optional] 
**skip** | **int** | The number of search results to skip. This value cannot be greater than 100,000. If you need to scan documents in sequence, but cannot use Skip due to this limitation, consider using OrderBy on a totally-ordered key and Filter with a range query instead. | [optional] 
**top** | **int** | The number of search results to retrieve. This can be used in conjunction with Skip to implement client-side paging of search results. If results are truncated due to server-side paging, the response will include a continuation token that can be passed to ContinueSearch to retrieve the next page of results. See DocumentSearchResponse.ContinuationToken for more information. | [optional] 

## Example

```python
from openapi_client.models.search_parameters_payload import SearchParametersPayload

# TODO update the JSON string below
json = "{}"
# create an instance of SearchParametersPayload from a JSON string
search_parameters_payload_instance = SearchParametersPayload.from_json(json)
# print the JSON string representation of the object
print(SearchParametersPayload.to_json())

# convert the object into a dict
search_parameters_payload_dict = search_parameters_payload_instance.to_dict()
# create an instance of SearchParametersPayload from a dict
search_parameters_payload_from_dict = SearchParametersPayload.from_dict(search_parameters_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


