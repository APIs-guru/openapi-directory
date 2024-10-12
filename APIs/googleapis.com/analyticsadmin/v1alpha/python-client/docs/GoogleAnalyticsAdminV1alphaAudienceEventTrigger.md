# GoogleAnalyticsAdminV1alphaAudienceEventTrigger

Specifies an event to log when a user joins the Audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_name** | **str** | Required. The event name that will be logged. | [optional] 
**log_condition** | **str** | Required. When to log the event. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_event_trigger import GoogleAnalyticsAdminV1alphaAudienceEventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceEventTrigger from a JSON string
google_analytics_admin_v1alpha_audience_event_trigger_instance = GoogleAnalyticsAdminV1alphaAudienceEventTrigger.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceEventTrigger.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_event_trigger_dict = google_analytics_admin_v1alpha_audience_event_trigger_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceEventTrigger from a dict
google_analytics_admin_v1alpha_audience_event_trigger_from_dict = GoogleAnalyticsAdminV1alphaAudienceEventTrigger.from_dict(google_analytics_admin_v1alpha_audience_event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


