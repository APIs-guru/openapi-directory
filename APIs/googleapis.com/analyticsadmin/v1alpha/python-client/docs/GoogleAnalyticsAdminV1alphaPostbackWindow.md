# GoogleAnalyticsAdminV1alphaPostbackWindow

Settings for a SKAdNetwork conversion postback window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_values** | [**List[GoogleAnalyticsAdminV1alphaConversionValues]**](GoogleAnalyticsAdminV1alphaConversionValues.md) | Ordering of the repeated field will be used to prioritize the conversion value settings. Lower indexed entries are prioritized higher. The first conversion value setting that evaluates to true will be selected. It must have at least one entry if enable_postback_window_settings is set to true. It can have maximum of 128 entries. | [optional] 
**postback_window_settings_enabled** | **bool** | If enable_postback_window_settings is true, conversion_values must be populated and will be used for determining when and how to set the Conversion Value on a client device and exporting schema to linked Ads accounts. If false, the settings are not used, but are retained in case they may be used in the future. This must always be true for postback_window_one. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_postback_window import GoogleAnalyticsAdminV1alphaPostbackWindow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaPostbackWindow from a JSON string
google_analytics_admin_v1alpha_postback_window_instance = GoogleAnalyticsAdminV1alphaPostbackWindow.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaPostbackWindow.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_postback_window_dict = google_analytics_admin_v1alpha_postback_window_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaPostbackWindow from a dict
google_analytics_admin_v1alpha_postback_window_from_dict = GoogleAnalyticsAdminV1alphaPostbackWindow.from_dict(google_analytics_admin_v1alpha_postback_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


