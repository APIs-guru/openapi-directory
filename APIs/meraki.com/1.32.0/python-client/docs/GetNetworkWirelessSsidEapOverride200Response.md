# GetNetworkWirelessSsidEapOverride200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eapol_key** | [**GetNetworkWirelessSsidEapOverride200ResponseEapolKey**](GetNetworkWirelessSsidEapOverride200ResponseEapolKey.md) |  | [optional] 
**identity** | [**GetNetworkWirelessSsidEapOverride200ResponseIdentity**](GetNetworkWirelessSsidEapOverride200ResponseIdentity.md) |  | [optional] 
**max_retries** | **int** | Maximum number of general EAP retries. | [optional] 
**timeout** | **int** | General EAP timeout in seconds. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidEapOverride200Response from a JSON string
get_network_wireless_ssid_eap_override200_response_instance = GetNetworkWirelessSsidEapOverride200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidEapOverride200Response.to_json())

# convert the object into a dict
get_network_wireless_ssid_eap_override200_response_dict = get_network_wireless_ssid_eap_override200_response_instance.to_dict()
# create an instance of GetNetworkWirelessSsidEapOverride200Response from a dict
get_network_wireless_ssid_eap_override200_response_from_dict = GetNetworkWirelessSsidEapOverride200Response.from_dict(get_network_wireless_ssid_eap_override200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


