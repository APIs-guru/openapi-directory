# GetNetworkWirelessSsidEapOverride200ResponseEapolKey

EAPOL Key settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retries** | **int** | Maximum number of EAPOL key retries. | [optional] 
**timeout_in_ms** | **int** | EAPOL Key timeout in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_eap_override200_response_eapol_key import GetNetworkWirelessSsidEapOverride200ResponseEapolKey

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidEapOverride200ResponseEapolKey from a JSON string
get_network_wireless_ssid_eap_override200_response_eapol_key_instance = GetNetworkWirelessSsidEapOverride200ResponseEapolKey.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidEapOverride200ResponseEapolKey.to_json())

# convert the object into a dict
get_network_wireless_ssid_eap_override200_response_eapol_key_dict = get_network_wireless_ssid_eap_override200_response_eapol_key_instance.to_dict()
# create an instance of GetNetworkWirelessSsidEapOverride200ResponseEapolKey from a dict
get_network_wireless_ssid_eap_override200_response_eapol_key_from_dict = GetNetworkWirelessSsidEapOverride200ResponseEapolKey.from_dict(get_network_wireless_ssid_eap_override200_response_eapol_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


