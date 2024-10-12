# GetNetworkWirelessSsidIdentityPsks200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email associated with the System&#39;s Manager User | [optional] 
**expires_at** | **str** | Timestamp for when the Identity PSK expires, or &#39;null&#39; to never expire | [optional] 
**group_policy_id** | **str** | The group policy to be applied to clients | [optional] 
**id** | **str** | The unique identifier of the Identity PSK | [optional] 
**name** | **str** | The name of the Identity PSK | [optional] 
**passphrase** | **str** | The passphrase for client authentication | [optional] 
**wifi_personal_network_id** | **str** | The WiFi Personal Network unique identifier | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_identity_psks200_response_inner import GetNetworkWirelessSsidIdentityPsks200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidIdentityPsks200ResponseInner from a JSON string
get_network_wireless_ssid_identity_psks200_response_inner_instance = GetNetworkWirelessSsidIdentityPsks200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidIdentityPsks200ResponseInner.to_json())

# convert the object into a dict
get_network_wireless_ssid_identity_psks200_response_inner_dict = get_network_wireless_ssid_identity_psks200_response_inner_instance.to_dict()
# create an instance of GetNetworkWirelessSsidIdentityPsks200ResponseInner from a dict
get_network_wireless_ssid_identity_psks200_response_inner_from_dict = GetNetworkWirelessSsidIdentityPsks200ResponseInner.from_dict(get_network_wireless_ssid_identity_psks200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


