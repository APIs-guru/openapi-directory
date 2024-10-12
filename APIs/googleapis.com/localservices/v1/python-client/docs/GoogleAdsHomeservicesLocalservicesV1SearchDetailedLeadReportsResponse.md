# GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse

A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_lead_reports** | [**List[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport]**](GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.md) | List of detailed lead reports uniquely identified by external lead id. | [optional] 
**next_page_token** | **str** | Pagination token to retrieve the next page of results. When &#x60;next_page_token&#x60; is not filled in, there is no next page and the list returned is the last page in the result set. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response import GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse from a JSON string
google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response_instance = GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response_dict = google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse from a dict
google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response_from_dict = GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse.from_dict(google_ads_homeservices_localservices_v1_search_detailed_lead_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


