# GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess

Details associated with a free access plan with limits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_minutes** | **int** | How long a device can use a network for free. | [optional] 
**enabled** | **bool** | Whether or not free access is enabled. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response_billing_free_access import GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess from a JSON string
get_network_wireless_ssid_splash_settings200_response_billing_free_access_instance = GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_billing_free_access_dict = get_network_wireless_ssid_splash_settings200_response_billing_free_access_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess from a dict
get_network_wireless_ssid_splash_settings200_response_billing_free_access_from_dict = GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess.from_dict(get_network_wireless_ssid_splash_settings200_response_billing_free_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


