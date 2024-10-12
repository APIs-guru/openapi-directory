# GoogleAnalyticsAdminV1alphaGoogleSignalsSettings

Settings values for Google Signals. This is a singleton resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | **str** | Output only. Terms of Service acceptance. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: \&quot;properties/1000/googleSignalsSettings\&quot; | [optional] [readonly] 
**state** | **str** | Status of this setting. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_google_signals_settings import GoogleAnalyticsAdminV1alphaGoogleSignalsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaGoogleSignalsSettings from a JSON string
google_analytics_admin_v1alpha_google_signals_settings_instance = GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_google_signals_settings_dict = google_analytics_admin_v1alpha_google_signals_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaGoogleSignalsSettings from a dict
google_analytics_admin_v1alpha_google_signals_settings_from_dict = GoogleAnalyticsAdminV1alphaGoogleSignalsSettings.from_dict(google_analytics_admin_v1alpha_google_signals_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


