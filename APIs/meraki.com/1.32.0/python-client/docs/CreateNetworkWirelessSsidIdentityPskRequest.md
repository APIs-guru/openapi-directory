# CreateNetworkWirelessSsidIdentityPskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_policy_id** | **str** | The group policy to be applied to clients | 
**name** | **str** | The name of the Identity PSK | 
**passphrase** | **str** | The passphrase for client authentication. If left blank, one will be auto-generated. | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_ssid_identity_psk_request import CreateNetworkWirelessSsidIdentityPskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessSsidIdentityPskRequest from a JSON string
create_network_wireless_ssid_identity_psk_request_instance = CreateNetworkWirelessSsidIdentityPskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessSsidIdentityPskRequest.to_json())

# convert the object into a dict
create_network_wireless_ssid_identity_psk_request_dict = create_network_wireless_ssid_identity_psk_request_instance.to_dict()
# create an instance of CreateNetworkWirelessSsidIdentityPskRequest from a dict
create_network_wireless_ssid_identity_psk_request_from_dict = CreateNetworkWirelessSsidIdentityPskRequest.from_dict(create_network_wireless_ssid_identity_psk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


