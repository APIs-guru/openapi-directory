# IndexStatusInspectionResult

Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_state** | **str** | Could Google find and index the page. More details about page indexing appear in &#39;indexing_state&#39;. | [optional] 
**crawled_as** | **str** | Primary crawler that was used by Google to crawl your site. | [optional] 
**google_canonical** | **str** | The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent. | [optional] 
**indexing_state** | **str** | Whether or not the page blocks indexing through a noindex rule. | [optional] 
**last_crawl_time** | **str** | Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully. | [optional] 
**page_fetch_state** | **str** | Whether or not Google could retrieve the page from your server. Equivalent to [\&quot;page fetch\&quot;](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report. | [optional] 
**referring_urls** | **List[str]** | URLs that link to the inspected URL, directly and indirectly. | [optional] 
**robots_txt_state** | **str** | Whether or not the page is blocked to Google by a robots.txt rule. | [optional] 
**sitemap** | **List[str]** | Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found. | [optional] 
**user_canonical** | **str** | The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent. | [optional] 
**verdict** | **str** | High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection). | [optional] 

## Example

```python
from openapi_client.models.index_status_inspection_result import IndexStatusInspectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of IndexStatusInspectionResult from a JSON string
index_status_inspection_result_instance = IndexStatusInspectionResult.from_json(json)
# print the JSON string representation of the object
print(IndexStatusInspectionResult.to_json())

# convert the object into a dict
index_status_inspection_result_dict = index_status_inspection_result_instance.to_dict()
# create an instance of IndexStatusInspectionResult from a dict
index_status_inspection_result_from_dict = IndexStatusInspectionResult.from_dict(index_status_inspection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


