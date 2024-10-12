# GoogleAdsSearchads360V0ServicesSearchSearchAds360Request

Request message for SearchAds360Service.Search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources. | [optional] 
**page_token** | **str** | Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from &#x60;next_page_token&#x60; in the previous response in order to request the next page of results. | [optional] 
**query** | **str** | Required. The query string. | [optional] 
**return_total_results_count** | **bool** | If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false. | [optional] 
**summary_row_setting** | **str** | Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned. | [optional] 
**validate_only** | **bool** | If true, the request is validated but not executed. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_search_search_ads360_request import GoogleAdsSearchads360V0ServicesSearchSearchAds360Request

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360Request from a JSON string
google_ads_searchads360_v0_services_search_search_ads360_request_instance = GoogleAdsSearchads360V0ServicesSearchSearchAds360Request.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesSearchSearchAds360Request.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_search_search_ads360_request_dict = google_ads_searchads360_v0_services_search_search_ads360_request_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360Request from a dict
google_ads_searchads360_v0_services_search_search_ads360_request_from_dict = GoogleAdsSearchads360V0ServicesSearchSearchAds360Request.from_dict(google_ads_searchads360_v0_services_search_search_ads360_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


