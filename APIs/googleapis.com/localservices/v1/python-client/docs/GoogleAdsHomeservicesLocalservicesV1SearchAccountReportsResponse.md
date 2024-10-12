# GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse

A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_reports** | [**List[GoogleAdsHomeservicesLocalservicesV1AccountReport]**](GoogleAdsHomeservicesLocalservicesV1AccountReport.md) | List of account reports which maps 1:1 to a particular linked GLS account. | [optional] 
**next_page_token** | **str** | Pagination token to retrieve the next page of results. When &#x60;next_page_token&#x60; is not filled in, there is no next page and the list returned is the last page in the result set. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_search_account_reports_response import GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse from a JSON string
google_ads_homeservices_localservices_v1_search_account_reports_response_instance = GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_search_account_reports_response_dict = google_ads_homeservices_localservices_v1_search_account_reports_response_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse from a dict
google_ads_homeservices_localservices_v1_search_account_reports_response_from_dict = GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.from_dict(google_ads_homeservices_localservices_v1_search_account_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


