# GoogleAdsSearchads360V0ServicesSearchSearchAds360Response

Response message for SearchAds360Service.Search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_custom_dimension_headers** | [**List[GoogleAdsSearchads360V0ServicesConversionCustomDimensionHeader]**](GoogleAdsSearchads360V0ServicesConversionCustomDimensionHeader.md) | The headers of the conversion custom dimensions in the results. | [optional] 
**conversion_custom_metric_headers** | [**List[GoogleAdsSearchads360V0ServicesConversionCustomMetricHeader]**](GoogleAdsSearchads360V0ServicesConversionCustomMetricHeader.md) | The headers of the conversion custom metrics in the results. | [optional] 
**custom_column_headers** | [**List[GoogleAdsSearchads360V0ServicesCustomColumnHeader]**](GoogleAdsSearchads360V0ServicesCustomColumnHeader.md) | The headers of the custom columns in the results. | [optional] 
**field_mask** | **str** | FieldMask that represents what fields were requested by the user. | [optional] 
**next_page_token** | **str** | Pagination token used to retrieve the next page of results. Pass the content of this string as the &#x60;page_token&#x60; attribute of the next request. &#x60;next_page_token&#x60; is not returned for the last page. | [optional] 
**raw_event_conversion_dimension_headers** | [**List[GoogleAdsSearchads360V0ServicesRawEventConversionDimensionHeader]**](GoogleAdsSearchads360V0ServicesRawEventConversionDimensionHeader.md) | The headers of the raw event conversion dimensions in the results. | [optional] 
**raw_event_conversion_metric_headers** | [**List[GoogleAdsSearchads360V0ServicesRawEventConversionMetricHeader]**](GoogleAdsSearchads360V0ServicesRawEventConversionMetricHeader.md) | The headers of the raw event conversion metrics in the results. | [optional] 
**results** | [**List[GoogleAdsSearchads360V0ServicesSearchAds360Row]**](GoogleAdsSearchads360V0ServicesSearchAds360Row.md) | The list of rows that matched the query. | [optional] 
**summary_row** | [**GoogleAdsSearchads360V0ServicesSearchAds360Row**](GoogleAdsSearchads360V0ServicesSearchAds360Row.md) |  | [optional] 
**total_results_count** | **str** | Total number of results that match the query ignoring the LIMIT clause. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_search_search_ads360_response import GoogleAdsSearchads360V0ServicesSearchSearchAds360Response

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360Response from a JSON string
google_ads_searchads360_v0_services_search_search_ads360_response_instance = GoogleAdsSearchads360V0ServicesSearchSearchAds360Response.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesSearchSearchAds360Response.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_search_search_ads360_response_dict = google_ads_searchads360_v0_services_search_search_ads360_response_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360Response from a dict
google_ads_searchads360_v0_services_search_search_ads360_response_from_dict = GoogleAdsSearchads360V0ServicesSearchSearchAds360Response.from_dict(google_ads_searchads360_v0_services_search_search_ads360_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


