# GetNetworkWirelessSsidSplashSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_simultaneous_logins** | **bool** | Whether or not to allow simultaneous logins from different devices. | [optional] 
**billing** | [**GetNetworkWirelessSsidSplashSettings200ResponseBilling**](GetNetworkWirelessSsidSplashSettings200ResponseBilling.md) |  | [optional] 
**block_all_traffic_before_sign_on** | **bool** | How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged. | [optional] 
**controller_disconnection_behavior** | **str** | How login attempts should be handled when the controller is unreachable. | [optional] 
**guest_sponsorship** | [**GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship**](GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship.md) |  | [optional] 
**redirect_url** | **str** | The custom redirect URL where the users will go after the splash page. | [optional] 
**self_registration** | [**GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration**](GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration.md) |  | [optional] 
**sentry_enrollment** | [**GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment**](GetNetworkWirelessSsidSplashSettings200ResponseSentryEnrollment.md) |  | [optional] 
**splash_image** | [**GetNetworkWirelessSsidSplashSettings200ResponseSplashImage**](GetNetworkWirelessSsidSplashSettings200ResponseSplashImage.md) |  | [optional] 
**splash_logo** | [**GetNetworkWirelessSsidSplashSettings200ResponseSplashLogo**](GetNetworkWirelessSsidSplashSettings200ResponseSplashLogo.md) |  | [optional] 
**splash_page** | **str** | The type of splash page for this SSID | [optional] 
**splash_prepaid_front** | [**GetNetworkWirelessSsidSplashSettings200ResponseSplashPrepaidFront**](GetNetworkWirelessSsidSplashSettings200ResponseSplashPrepaidFront.md) |  | [optional] 
**splash_timeout** | **int** | Splash timeout in minutes. | [optional] 
**splash_url** | **str** | The custom splash URL of the click-through splash page. | [optional] 
**ssid_number** | **int** | SSID number | [optional] 
**use_redirect_url** | **bool** | The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. | [optional] 
**use_splash_url** | **bool** | Boolean indicating whether the users will be redirected to the custom splash url | [optional] 
**welcome_message** | **str** | The welcome message for the users on the splash page. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200Response from a JSON string
get_network_wireless_ssid_splash_settings200_response_instance = GetNetworkWirelessSsidSplashSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200Response.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_dict = get_network_wireless_ssid_splash_settings200_response_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200Response from a dict
get_network_wireless_ssid_splash_settings200_response_from_dict = GetNetworkWirelessSsidSplashSettings200Response.from_dict(get_network_wireless_ssid_splash_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


