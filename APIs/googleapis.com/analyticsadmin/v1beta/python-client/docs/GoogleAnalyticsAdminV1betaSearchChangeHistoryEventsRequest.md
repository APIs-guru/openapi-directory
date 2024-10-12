# GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest

Request message for SearchChangeHistoryEvents RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **List[str]** | Optional. If set, only return changes that match one or more of these types of actions. | [optional] 
**actor_email** | **List[str]** | Optional. If set, only return changes if they are made by a user in this list. | [optional] 
**earliest_change_time** | **str** | Optional. If set, only return changes made after this time (inclusive). | [optional] 
**latest_change_time** | **str** | Optional. If set, only return changes made before this time (inclusive). | [optional] 
**page_size** | **int** | Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum). | [optional] 
**page_token** | **str** | Optional. A page token, received from a previous &#x60;SearchChangeHistoryEvents&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;SearchChangeHistoryEvents&#x60; must match the call that provided the page token. | [optional] 
**var_property** | **str** | Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: \&quot;properties/100\&quot; | [optional] 
**resource_type** | **List[str]** | Optional. If set, only return changes if they are for a resource that matches at least one of these types. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_search_change_history_events_request import GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest from a JSON string
google_analytics_admin_v1beta_search_change_history_events_request_instance = GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_search_change_history_events_request_dict = google_analytics_admin_v1beta_search_change_history_events_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest from a dict
google_analytics_admin_v1beta_search_change_history_events_request_from_dict = GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.from_dict(google_analytics_admin_v1beta_search_change_history_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


