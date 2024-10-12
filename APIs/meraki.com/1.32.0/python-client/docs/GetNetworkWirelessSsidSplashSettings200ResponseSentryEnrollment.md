# GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment

Systems Manager sentry enrollment splash settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforced_systems** | **List[str]** | The system types that the Sentry enforces. | [optional] 
**strength** | **str** | The strength of the enforcement of selected system types. | [optional] 
**systems_manager_network** | [**GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollmentSystemsManagerNetwork**](GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollmentSystemsManagerNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response_sentry_enrollment import GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment from a JSON string
get_network_wireless_ssid_splash_settings200_response_sentry_enrollment_instance = GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_sentry_enrollment_dict = get_network_wireless_ssid_splash_settings200_response_sentry_enrollment_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment from a dict
get_network_wireless_ssid_splash_settings200_response_sentry_enrollment_from_dict = GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment.from_dict(get_network_wireless_ssid_splash_settings200_response_sentry_enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


