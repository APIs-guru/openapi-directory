# UpdateNetworkWirelessSsidSplashSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_simultaneous_logins** | **bool** | Whether or not to allow simultaneous logins from different devices. | [optional] 
**billing** | [**UpdateNetworkWirelessSsidSplashSettingsRequestBilling**](UpdateNetworkWirelessSsidSplashSettingsRequestBilling.md) |  | [optional] 
**block_all_traffic_before_sign_on** | **bool** | How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged. | [optional] 
**controller_disconnection_behavior** | **str** | How login attempts should be handled when the controller is unreachable. Can be either &#39;open&#39;, &#39;restricted&#39;, or &#39;default&#39;. | [optional] 
**guest_sponsorship** | [**UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship**](UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship.md) |  | [optional] 
**redirect_url** | **str** | The custom redirect URL where the users will go after the splash page. | [optional] 
**sentry_enrollment** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment**](UpdateNetworkWirelessSsidSplashSettingsRequestSentryEnrollment.md) |  | [optional] 
**splash_image** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage**](UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage.md) |  | [optional] 
**splash_logo** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSplashLogo**](UpdateNetworkWirelessSsidSplashSettingsRequestSplashLogo.md) |  | [optional] 
**splash_prepaid_front** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront**](UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront.md) |  | [optional] 
**splash_timeout** | **int** | Splash timeout in minutes. This will determine how often users will see the splash page. | [optional] 
**splash_url** | **str** | [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see &#39;useSplashUrl&#39; | [optional] 
**use_redirect_url** | **bool** | The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true. | [optional] 
**use_splash_url** | **bool** | [optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID&#39;s access control settings, it may not be possible to use the custom splash URL. | [optional] 
**welcome_message** | **str** | The welcome message for the users on the splash page. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request import UpdateNetworkWirelessSsidSplashSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequest from a JSON string
update_network_wireless_ssid_splash_settings_request_instance = UpdateNetworkWirelessSsidSplashSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_dict = update_network_wireless_ssid_splash_settings_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequest from a dict
update_network_wireless_ssid_splash_settings_request_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequest.from_dict(update_network_wireless_ssid_splash_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


