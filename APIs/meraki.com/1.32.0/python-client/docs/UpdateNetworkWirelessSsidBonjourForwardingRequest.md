# UpdateNetworkWirelessSsidBonjourForwardingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If true, Bonjour forwarding is enabled on this SSID. | [optional] 
**rules** | [**List[CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner]**](CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner.md) | List of bonjour forwarding rules. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_bonjour_forwarding_request import UpdateNetworkWirelessSsidBonjourForwardingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidBonjourForwardingRequest from a JSON string
update_network_wireless_ssid_bonjour_forwarding_request_instance = UpdateNetworkWirelessSsidBonjourForwardingRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidBonjourForwardingRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_bonjour_forwarding_request_dict = update_network_wireless_ssid_bonjour_forwarding_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidBonjourForwardingRequest from a dict
update_network_wireless_ssid_bonjour_forwarding_request_from_dict = UpdateNetworkWirelessSsidBonjourForwardingRequest.from_dict(update_network_wireless_ssid_bonjour_forwarding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


