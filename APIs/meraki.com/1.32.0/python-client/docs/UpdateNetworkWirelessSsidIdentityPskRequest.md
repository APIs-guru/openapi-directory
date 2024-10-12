# UpdateNetworkWirelessSsidIdentityPskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_policy_id** | **str** | The group policy to be applied to clients | [optional] 
**name** | **str** | The name of the Identity PSK | [optional] 
**passphrase** | **str** | The passphrase for client authentication | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_identity_psk_request import UpdateNetworkWirelessSsidIdentityPskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidIdentityPskRequest from a JSON string
update_network_wireless_ssid_identity_psk_request_instance = UpdateNetworkWirelessSsidIdentityPskRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidIdentityPskRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_identity_psk_request_dict = update_network_wireless_ssid_identity_psk_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidIdentityPskRequest from a dict
update_network_wireless_ssid_identity_psk_request_from_dict = UpdateNetworkWirelessSsidIdentityPskRequest.from_dict(update_network_wireless_ssid_identity_psk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


