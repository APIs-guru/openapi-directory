# GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration

Self-registration for splash with Meraki authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_type** | **str** | How created user accounts should be authorized. | [optional] 
**enabled** | **bool** | Whether or not to allow users to create their own account on the network. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response_self_registration import GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration from a JSON string
get_network_wireless_ssid_splash_settings200_response_self_registration_instance = GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_self_registration_dict = get_network_wireless_ssid_splash_settings200_response_self_registration_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration from a dict
get_network_wireless_ssid_splash_settings200_response_self_registration_from_dict = GetNetworkWirelessSsidSplashSettings200ResponseSelfRegistration.from_dict(get_network_wireless_ssid_splash_settings200_response_self_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


