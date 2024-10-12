# GoogleAnalyticsAdminV1alphaAudienceEventFilter

A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_name** | **str** | Required. Immutable. The name of the event to match against. | [optional] 
**event_parameter_filter_expression** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpression**](GoogleAnalyticsAdminV1alphaAudienceFilterExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_event_filter import GoogleAnalyticsAdminV1alphaAudienceEventFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceEventFilter from a JSON string
google_analytics_admin_v1alpha_audience_event_filter_instance = GoogleAnalyticsAdminV1alphaAudienceEventFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceEventFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_event_filter_dict = google_analytics_admin_v1alpha_audience_event_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceEventFilter from a dict
google_analytics_admin_v1alpha_audience_event_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceEventFilter.from_dict(google_analytics_admin_v1alpha_audience_event_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


