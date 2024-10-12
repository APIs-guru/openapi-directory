# GetNetworkWirelessSsidEapOverride200ResponseIdentity

EAP settings for identity requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retries** | **int** | Maximum number of EAP retries. | [optional] 
**timeout** | **int** | EAP timeout in seconds. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_eap_override200_response_identity import GetNetworkWirelessSsidEapOverride200ResponseIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidEapOverride200ResponseIdentity from a JSON string
get_network_wireless_ssid_eap_override200_response_identity_instance = GetNetworkWirelessSsidEapOverride200ResponseIdentity.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidEapOverride200ResponseIdentity.to_json())

# convert the object into a dict
get_network_wireless_ssid_eap_override200_response_identity_dict = get_network_wireless_ssid_eap_override200_response_identity_instance.to_dict()
# create an instance of GetNetworkWirelessSsidEapOverride200ResponseIdentity from a dict
get_network_wireless_ssid_eap_override200_response_identity_from_dict = GetNetworkWirelessSsidEapOverride200ResponseIdentity.from_dict(get_network_wireless_ssid_eap_override200_response_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


