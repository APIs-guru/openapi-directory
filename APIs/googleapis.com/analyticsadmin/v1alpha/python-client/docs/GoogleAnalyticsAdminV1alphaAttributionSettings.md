# GoogleAnalyticsAdminV1alphaAttributionSettings

The attribution settings used for a given property. This is a singleton resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisition_conversion_event_lookback_window** | **str** | Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days. | [optional] 
**ads_web_conversion_data_export_scope** | **str** | Required. The Conversion Export Scope for data exported to linked Ads Accounts. | [optional] 
**name** | **str** | Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: \&quot;properties/1000/attributionSettings\&quot; | [optional] [readonly] 
**other_conversion_event_lookback_window** | **str** | Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days. | [optional] 
**reporting_attribution_model** | **str** | Required. The reporting attribution model used to calculate conversion credit in this property&#39;s reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_attribution_settings import GoogleAnalyticsAdminV1alphaAttributionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAttributionSettings from a JSON string
google_analytics_admin_v1alpha_attribution_settings_instance = GoogleAnalyticsAdminV1alphaAttributionSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAttributionSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_attribution_settings_dict = google_analytics_admin_v1alpha_attribution_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAttributionSettings from a dict
google_analytics_admin_v1alpha_attribution_settings_from_dict = GoogleAnalyticsAdminV1alphaAttributionSettings.from_dict(google_analytics_admin_v1alpha_attribution_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


