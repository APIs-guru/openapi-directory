# GoogleCloudDiscoveryengineV1betaSearchResponse

Response message for SearchService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_controls** | **List[str]** | Controls applied as part of the Control service. | [optional] 
**attribution_token** | **str** | A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. | [optional] 
**corrected_query** | **str** | Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. | [optional] 
**facets** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseFacet]**](GoogleCloudDiscoveryengineV1betaSearchResponseFacet.md) | Results of facets requested by user. | [optional] 
**geo_search_debug_info** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo]**](GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo.md) |  | [optional] 
**guided_search_result** | [**GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult**](GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult.md) |  | [optional] 
**next_page_token** | **str** | A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**query_expansion_info** | [**GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo**](GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo.md) |  | [optional] 
**redirect_uri** | **str** | The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. | [optional] 
**results** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult]**](GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult.md) | A list of matched documents. The order represents the ranking. | [optional] 
**summary** | [**GoogleCloudDiscoveryengineV1betaSearchResponseSummary**](GoogleCloudDiscoveryengineV1betaSearchResponseSummary.md) |  | [optional] 
**total_size** | **int** | The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response import GoogleCloudDiscoveryengineV1betaSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponse from a JSON string
google_cloud_discoveryengine_v1beta_search_response_instance = GoogleCloudDiscoveryengineV1betaSearchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_dict = google_cloud_discoveryengine_v1beta_search_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponse from a dict
google_cloud_discoveryengine_v1beta_search_response_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponse.from_dict(google_cloud_discoveryengine_v1beta_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


