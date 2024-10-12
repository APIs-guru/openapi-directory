# UpdateNetworkWirelessSsidEapOverrideRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eapol_key** | [**GetNetworkWirelessSsidEapOverride200ResponseEapolKey**](GetNetworkWirelessSsidEapOverride200ResponseEapolKey.md) |  | [optional] 
**identity** | [**GetNetworkWirelessSsidEapOverride200ResponseIdentity**](GetNetworkWirelessSsidEapOverride200ResponseIdentity.md) |  | [optional] 
**max_retries** | **int** | Maximum number of general EAP retries. | [optional] 
**timeout** | **int** | General EAP timeout in seconds. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_eap_override_request import UpdateNetworkWirelessSsidEapOverrideRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidEapOverrideRequest from a JSON string
update_network_wireless_ssid_eap_override_request_instance = UpdateNetworkWirelessSsidEapOverrideRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidEapOverrideRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_eap_override_request_dict = update_network_wireless_ssid_eap_override_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidEapOverrideRequest from a dict
update_network_wireless_ssid_eap_override_request_from_dict = UpdateNetworkWirelessSsidEapOverrideRequest.from_dict(update_network_wireless_ssid_eap_override_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


