# SearchJobsRequest

Input only. The Request body of the `SearchJobs` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_ranking_info** | [**CustomRankingInfo**](CustomRankingInfo.md) |  | [optional] 
**disable_keyword_match** | **bool** | Optional. Controls whether to disable exact keyword match on Job.job_title, Job.description, Job.company_display_name, Job.locations, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, the query \&quot;program manager,\&quot; a result is returned even if the job posting has the title \&quot;software developer,\&quot; which does not fall into \&quot;program manager\&quot; ontology, but does have \&quot;program manager\&quot; appearing in its description. For queries like \&quot;cloud\&quot; that does not contain title or location specific ontology, jobs with \&quot;cloud\&quot; keyword matches are returned regardless of this flag&#39;s value. Please use Company.keyword_searchable_custom_fields or Company.keyword_searchable_custom_attributes if company specific globally matched custom field/attribute string values is needed. Enabling keyword match improves recall of subsequent search requests. Defaults to false. | [optional] 
**diversification_level** | **str** | Optional. Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified. | [optional] 
**enable_broadening** | **bool** | Optional. Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list. Defaults to false. | [optional] 
**histogram_facets** | [**HistogramFacets**](HistogramFacets.md) |  | [optional] 
**histogram_queries** | [**List[HistogramQuery]**](HistogramQuery.md) | Optional. Expression based histogram requests for jobs matching JobQuery. | [optional] 
**job_query** | [**JobQuery**](JobQuery.md) |  | [optional] 
**job_view** | **str** | Optional. The desired job attributes returned for jobs in the search response. Defaults to JobView.SMALL if no value is specified. | [optional] 
**offset** | **int** | Optional. An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize &#x3D; 10 and offset &#x3D; 10 means to return from the second page). | [optional] 
**order_by** | **str** | Optional. The criteria determining how search results are sorted. Default is \&quot;relevance desc\&quot;. Supported options are: * &#x60;\&quot;relevance desc\&quot;&#x60;: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering. * &#x60;\&quot;posting_publish_time desc\&quot;&#x60;: By Job.posting_publish_time descending. * &#x60;\&quot;posting_update_time desc\&quot;&#x60;: By Job.posting_update_time descending. * &#x60;\&quot;title\&quot;&#x60;: By Job.title ascending. * &#x60;\&quot;title desc\&quot;&#x60;: By Job.title descending. * &#x60;\&quot;annualized_base_compensation\&quot;&#x60;: By job&#39;s CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * &#x60;\&quot;annualized_base_compensation desc\&quot;&#x60;: By job&#39;s CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * &#x60;\&quot;annualized_total_compensation\&quot;&#x60;: By job&#39;s CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * &#x60;\&quot;annualized_total_compensation desc\&quot;&#x60;: By job&#39;s CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is unspecified are put at the end of search results. * &#x60;\&quot;custom_ranking desc\&quot;&#x60;: By the relevance score adjusted to the SearchJobsRequest.custom_ranking_info.ranking_expression with weight factor assigned by SearchJobsRequest.custom_ranking_info.importance_level in descending order. * Location sorting: Use the special syntax to order jobs by distance: \&quot;&#x60;distance_from(&#39;Hawaii&#39;)&#x60;\&quot;: Order by distance from Hawaii. \&quot;&#x60;distance_from(19.89, 155.5)&#x60;\&quot;: Order by distance from a coordinate. \&quot;&#x60;distance_from(&#39;Hawaii&#39;), distance_from(&#39;Puerto Rico&#39;)&#x60;\&quot;: Order by multiple locations. See details below. \&quot;&#x60;distance_from(&#39;Hawaii&#39;), distance_from(19.89, 155.5)&#x60;\&quot;: Order by multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don&#39;t have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in diversification_level. | [optional] 
**page_size** | **int** | Optional. A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100. | [optional] 
**page_token** | **str** | Optional. The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an explanation of how to obtain the next set of query results. | [optional] 
**request_metadata** | [**RequestMetadata**](RequestMetadata.md) |  | [optional] 
**require_precise_result_size** | **bool** | This field is deprecated. | [optional] 
**search_mode** | **str** | Optional. Mode of a search. Defaults to SearchMode.JOB_SEARCH. | [optional] 

## Example

```python
from openapi_client.models.search_jobs_request import SearchJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchJobsRequest from a JSON string
search_jobs_request_instance = SearchJobsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchJobsRequest.to_json())

# convert the object into a dict
search_jobs_request_dict = search_jobs_request_instance.to_dict()
# create an instance of SearchJobsRequest from a dict
search_jobs_request_from_dict = SearchJobsRequest.from_dict(search_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


