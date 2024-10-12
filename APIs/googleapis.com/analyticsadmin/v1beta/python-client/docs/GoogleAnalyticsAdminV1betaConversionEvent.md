# GoogleAnalyticsAdminV1betaConversionEvent

A conversion event in a Google Analytics property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counting_method** | **str** | Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to &#x60;ONCE_PER_EVENT&#x60;. | [optional] 
**create_time** | **str** | Output only. Time when this conversion event was created in the property. | [optional] [readonly] 
**custom** | **bool** | Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property. | [optional] [readonly] 
**default_conversion_value** | [**GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue**](GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue.md) |  | [optional] 
**deletable** | **bool** | Output only. If set, this event can currently be deleted with DeleteConversionEvent. | [optional] [readonly] 
**event_name** | **str** | Immutable. The event name for this conversion event. Examples: &#39;click&#39;, &#39;purchase&#39; | [optional] 
**name** | **str** | Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_conversion_event import GoogleAnalyticsAdminV1betaConversionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaConversionEvent from a JSON string
google_analytics_admin_v1beta_conversion_event_instance = GoogleAnalyticsAdminV1betaConversionEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaConversionEvent.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_conversion_event_dict = google_analytics_admin_v1beta_conversion_event_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaConversionEvent from a dict
google_analytics_admin_v1beta_conversion_event_from_dict = GoogleAnalyticsAdminV1betaConversionEvent.from_dict(google_analytics_admin_v1beta_conversion_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


