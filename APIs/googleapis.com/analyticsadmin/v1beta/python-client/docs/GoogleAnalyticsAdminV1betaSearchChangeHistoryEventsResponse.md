# GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse

Response message for SearchAccounts RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_history_events** | [**List[GoogleAnalyticsAdminV1betaChangeHistoryEvent]**](GoogleAnalyticsAdminV1betaChangeHistoryEvent.md) | Results that were accessible to the caller. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_search_change_history_events_response import GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse from a JSON string
google_analytics_admin_v1beta_search_change_history_events_response_instance = GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_search_change_history_events_response_dict = google_analytics_admin_v1beta_search_change_history_events_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse from a dict
google_analytics_admin_v1beta_search_change_history_events_response_from_dict = GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse.from_dict(google_analytics_admin_v1beta_search_change_history_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


