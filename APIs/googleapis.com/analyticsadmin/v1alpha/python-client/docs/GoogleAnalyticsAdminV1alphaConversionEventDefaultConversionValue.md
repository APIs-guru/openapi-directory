# GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue

Defines a default value/currency for a conversion event. Both value and currency must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. | [optional] 
**value** | **float** | This value will be used to populate the value for all conversions of the specified event_name where the event \&quot;value\&quot; parameter is unset. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_conversion_event_default_conversion_value import GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue from a JSON string
google_analytics_admin_v1alpha_conversion_event_default_conversion_value_instance = GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_conversion_event_default_conversion_value_dict = google_analytics_admin_v1alpha_conversion_event_default_conversion_value_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue from a dict
google_analytics_admin_v1alpha_conversion_event_default_conversion_value_from_dict = GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue.from_dict(google_analytics_admin_v1alpha_conversion_event_default_conversion_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


