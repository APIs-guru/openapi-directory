# GoogleAnalyticsAdminV1betaListAccountSummariesResponse

Response message for ListAccountSummaries RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_summaries** | [**List[GoogleAnalyticsAdminV1betaAccountSummary]**](GoogleAnalyticsAdminV1betaAccountSummary.md) | Account summaries of all accounts the caller has access to. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_list_account_summaries_response import GoogleAnalyticsAdminV1betaListAccountSummariesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaListAccountSummariesResponse from a JSON string
google_analytics_admin_v1beta_list_account_summaries_response_instance = GoogleAnalyticsAdminV1betaListAccountSummariesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaListAccountSummariesResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_list_account_summaries_response_dict = google_analytics_admin_v1beta_list_account_summaries_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaListAccountSummariesResponse from a dict
google_analytics_admin_v1beta_list_account_summaries_response_from_dict = GoogleAnalyticsAdminV1betaListAccountSummariesResponse.from_dict(google_analytics_admin_v1beta_list_account_summaries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


