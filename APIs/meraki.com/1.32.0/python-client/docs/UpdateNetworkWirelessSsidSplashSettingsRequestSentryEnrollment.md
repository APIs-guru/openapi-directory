# UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment

Systems Manager sentry enrollment splash settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforced_systems** | **List[str]** | The system types that the Sentry enforces. Must be included in: &#39;iOS, &#39;Android&#39;, &#39;macOS&#39;, and &#39;Windows&#39;. | [optional] 
**strength** | **str** | The strength of the enforcement of selected system types. Must be one of: &#39;focused&#39;, &#39;click-through&#39;, and &#39;strict&#39;. | [optional] 
**systems_manager_network** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollmentSystemsManagerNetwork**](UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollmentSystemsManagerNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_sentry_enrollment import UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment from a JSON string
update_network_wireless_ssid_splash_settings_request_sentry_enrollment_instance = UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_sentry_enrollment_dict = update_network_wireless_ssid_splash_settings_request_sentry_enrollment_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment from a dict
update_network_wireless_ssid_splash_settings_request_sentry_enrollment_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment.from_dict(update_network_wireless_ssid_splash_settings_request_sentry_enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


