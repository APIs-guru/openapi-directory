# SearchJobsResponse

Response for SearchJob method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadened_query_jobs_count** | **int** | If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn&#39;t set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results. | [optional] 
**histogram_query_results** | [**List[HistogramQueryResult]**](HistogramQueryResult.md) | The histogram results that match with specified SearchJobsRequest.histogram_queries. | [optional] 
**location_filters** | [**List[Location]**](Location.md) | The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED. | [optional] 
**matching_jobs** | [**List[MatchingJob]**](MatchingJob.md) | The Job entities that match the specified SearchJobsRequest. | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**next_page_token** | **str** | The token that specifies the starting position of the next page of results. This field is empty if there are no more results. | [optional] 
**spell_correction** | [**SpellingCorrection**](SpellingCorrection.md) |  | [optional] 
**total_size** | **int** | Number of jobs that match the specified query. Note: This size is precise only if the total is less than 100,000. | [optional] 

## Example

```python
from openapi_client.models.search_jobs_response import SearchJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchJobsResponse from a JSON string
search_jobs_response_instance = SearchJobsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchJobsResponse.to_json())

# convert the object into a dict
search_jobs_response_dict = search_jobs_response_instance.to_dict()
# create an instance of SearchJobsResponse from a dict
search_jobs_response_from_dict = SearchJobsResponse.from_dict(search_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


