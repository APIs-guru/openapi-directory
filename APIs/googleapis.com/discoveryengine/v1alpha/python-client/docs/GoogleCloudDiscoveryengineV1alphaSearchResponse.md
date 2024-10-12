# GoogleCloudDiscoveryengineV1alphaSearchResponse

Response message for SearchService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_controls** | **List[str]** | Controls applied as part of the Control service. | [optional] 
**attribution_token** | **str** | A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. | [optional] 
**corrected_query** | **str** | Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. | [optional] 
**facets** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseFacet]**](GoogleCloudDiscoveryengineV1alphaSearchResponseFacet.md) | Results of facets requested by user. | [optional] 
**geo_search_debug_info** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseGeoSearchDebugInfo]**](GoogleCloudDiscoveryengineV1alphaSearchResponseGeoSearchDebugInfo.md) |  | [optional] 
**guided_search_result** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult**](GoogleCloudDiscoveryengineV1alphaSearchResponseGuidedSearchResult.md) |  | [optional] 
**next_page_token** | **str** | A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**query_expansion_info** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseQueryExpansionInfo**](GoogleCloudDiscoveryengineV1alphaSearchResponseQueryExpansionInfo.md) |  | [optional] 
**redirect_uri** | **str** | The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. | [optional] 
**results** | [**List[GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult]**](GoogleCloudDiscoveryengineV1alphaSearchResponseSearchResult.md) | A list of matched documents. The order represents the ranking. | [optional] 
**summary** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseSummary**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummary.md) |  | [optional] 
**total_size** | **int** | The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response import GoogleCloudDiscoveryengineV1alphaSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponse from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_instance = GoogleCloudDiscoveryengineV1alphaSearchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_dict = google_cloud_discoveryengine_v1alpha_search_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponse from a dict
google_cloud_discoveryengine_v1alpha_search_response_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponse.from_dict(google_cloud_discoveryengine_v1alpha_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


