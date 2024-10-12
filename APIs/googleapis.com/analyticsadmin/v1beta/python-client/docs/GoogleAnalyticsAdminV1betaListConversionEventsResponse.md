# GoogleAnalyticsAdminV1betaListConversionEventsResponse

Response message for ListConversionEvents RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_events** | [**List[GoogleAnalyticsAdminV1betaConversionEvent]**](GoogleAnalyticsAdminV1betaConversionEvent.md) | The requested conversion events | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_list_conversion_events_response import GoogleAnalyticsAdminV1betaListConversionEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaListConversionEventsResponse from a JSON string
google_analytics_admin_v1beta_list_conversion_events_response_instance = GoogleAnalyticsAdminV1betaListConversionEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaListConversionEventsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_list_conversion_events_response_dict = google_analytics_admin_v1beta_list_conversion_events_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaListConversionEventsResponse from a dict
google_analytics_admin_v1beta_list_conversion_events_response_from_dict = GoogleAnalyticsAdminV1betaListConversionEventsResponse.from_dict(google_analytics_admin_v1beta_list_conversion_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


