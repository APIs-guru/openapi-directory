# GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse

Response message for SearchAds360FieldService.SearchSearchAds360Fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token used to retrieve the next page of results. Pass the content of this string as the &#x60;page_token&#x60; attribute of the next request. &#x60;next_page_token&#x60; is not returned for the last page. | [optional] 
**results** | [**List[GoogleAdsSearchads360V0ResourcesSearchAds360Field]**](GoogleAdsSearchads360V0ResourcesSearchAds360Field.md) | The list of fields that matched the query. | [optional] 
**total_results_count** | **str** | Total number of results that match the query ignoring the LIMIT clause. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_search_search_ads360_fields_response import GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse from a JSON string
google_ads_searchads360_v0_services_search_search_ads360_fields_response_instance = GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_search_search_ads360_fields_response_dict = google_ads_searchads360_v0_services_search_search_ads360_fields_response_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse from a dict
google_ads_searchads360_v0_services_search_search_ads360_fields_response_from_dict = GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse.from_dict(google_ads_searchads360_v0_services_search_search_ads360_fields_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


