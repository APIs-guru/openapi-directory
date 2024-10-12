# GoogleCloudRetailV2betaSearchResponse

Response message for SearchService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_controls** | **List[str]** | The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules). | [optional] 
**attribution_token** | **str** | A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. | [optional] 
**corrected_query** | **str** | Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. | [optional] 
**experiment_info** | [**List[GoogleCloudRetailV2betaExperimentInfo]**](GoogleCloudRetailV2betaExperimentInfo.md) | Metadata related to A/B testing Experiment associated with this response. Only exists when an experiment is triggered. | [optional] 
**facets** | [**List[GoogleCloudRetailV2betaSearchResponseFacet]**](GoogleCloudRetailV2betaSearchResponseFacet.md) | Results of facets requested by user. | [optional] 
**invalid_condition_boost_specs** | [**List[GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec]**](GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec.md) | The invalid SearchRequest.BoostSpec.condition_boost_specs that are not applied during serving. | [optional] 
**next_page_token** | **str** | A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**query_expansion_info** | [**GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo**](GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo.md) |  | [optional] 
**redirect_uri** | **str** | The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. | [optional] 
**results** | [**List[GoogleCloudRetailV2betaSearchResponseSearchResult]**](GoogleCloudRetailV2betaSearchResponseSearchResult.md) | A list of matched items. The order represents the ranking. | [optional] 
**total_size** | **int** | The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_search_response import GoogleCloudRetailV2betaSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaSearchResponse from a JSON string
google_cloud_retail_v2beta_search_response_instance = GoogleCloudRetailV2betaSearchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaSearchResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_search_response_dict = google_cloud_retail_v2beta_search_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaSearchResponse from a dict
google_cloud_retail_v2beta_search_response_from_dict = GoogleCloudRetailV2betaSearchResponse.from_dict(google_cloud_retail_v2beta_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


