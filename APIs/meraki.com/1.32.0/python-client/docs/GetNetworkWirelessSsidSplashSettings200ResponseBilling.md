# GetNetworkWirelessSsidSplashSettings200ResponseBilling

Details associated with billing splash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_access** | [**GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess**](GetNetworkWirelessSsidSplashSettings200ResponseBillingFreeAccess.md) |  | [optional] 
**prepaid_access_fast_login_enabled** | **bool** | Whether or not billing uses the fast login prepaid access option. | [optional] 
**reply_to_email_address** | **str** | The email address that reeceives replies from clients | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response_billing import GetNetworkWirelessSsidSplashSettings200ResponseBilling

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseBilling from a JSON string
get_network_wireless_ssid_splash_settings200_response_billing_instance = GetNetworkWirelessSsidSplashSettings200ResponseBilling.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200ResponseBilling.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_billing_dict = get_network_wireless_ssid_splash_settings200_response_billing_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseBilling from a dict
get_network_wireless_ssid_splash_settings200_response_billing_from_dict = GetNetworkWirelessSsidSplashSettings200ResponseBilling.from_dict(get_network_wireless_ssid_splash_settings200_response_billing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


