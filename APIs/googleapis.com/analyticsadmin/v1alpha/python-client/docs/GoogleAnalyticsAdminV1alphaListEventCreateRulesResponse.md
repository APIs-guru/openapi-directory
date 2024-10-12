# GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse

Response message for ListEventCreateRules RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_create_rules** | [**List[GoogleAnalyticsAdminV1alphaEventCreateRule]**](GoogleAnalyticsAdminV1alphaEventCreateRule.md) | List of EventCreateRules. These will be ordered stably, but in an arbitrary order. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_event_create_rules_response import GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse from a JSON string
google_analytics_admin_v1alpha_list_event_create_rules_response_instance = GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_event_create_rules_response_dict = google_analytics_admin_v1alpha_list_event_create_rules_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse from a dict
google_analytics_admin_v1alpha_list_event_create_rules_response_from_dict = GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse.from_dict(google_analytics_admin_v1alpha_list_event_create_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


