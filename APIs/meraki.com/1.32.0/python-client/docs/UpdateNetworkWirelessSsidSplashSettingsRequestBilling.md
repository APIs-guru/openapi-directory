# UpdateNetworkWirelessSsidSplashSettingsRequestBilling

Details associated with billing splash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_access** | [**UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess**](UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess.md) |  | [optional] 
**prepaid_access_fast_login_enabled** | **bool** | Whether or not billing uses the fast login prepaid access option. | [optional] 
**reply_to_email_address** | **str** | The email address that receives replies from clients. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_billing import UpdateNetworkWirelessSsidSplashSettingsRequestBilling

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestBilling from a JSON string
update_network_wireless_ssid_splash_settings_request_billing_instance = UpdateNetworkWirelessSsidSplashSettingsRequestBilling.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestBilling.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_billing_dict = update_network_wireless_ssid_splash_settings_request_billing_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestBilling from a dict
update_network_wireless_ssid_splash_settings_request_billing_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestBilling.from_dict(update_network_wireless_ssid_splash_settings_request_billing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


