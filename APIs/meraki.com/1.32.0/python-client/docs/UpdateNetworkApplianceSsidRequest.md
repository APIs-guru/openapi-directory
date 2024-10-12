# UpdateNetworkApplianceSsidRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **str** | The association control method for the SSID (&#39;open&#39;, &#39;psk&#39;, &#39;8021x-meraki&#39; or &#39;8021x-radius&#39;). | [optional] 
**default_vlan_id** | **int** | The VLAN ID of the VLAN associated to this SSID. This parameter is only valid if the network is in routed mode. | [optional] 
**dhcp_enforced_deauthentication** | [**UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication**](UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication.md) |  | [optional] 
**enabled** | **bool** | Whether or not the SSID is enabled. | [optional] 
**encryption_mode** | **str** | The psk encryption mode for the SSID (&#39;wep&#39; or &#39;wpa&#39;). This param is only valid if the authMode is &#39;psk&#39;. | [optional] 
**name** | **str** | The name of the SSID. | [optional] 
**psk** | **str** | The passkey for the SSID. This param is only valid if the authMode is &#39;psk&#39;. | [optional] 
**radius_servers** | [**List[UpdateNetworkApplianceSsidRequestRadiusServersInner]**](UpdateNetworkApplianceSsidRequestRadiusServersInner.md) | The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is &#39;8021x-radius&#39;. | [optional] 
**visible** | **bool** | Boolean indicating whether the MX should advertise or hide this SSID. | [optional] 
**wpa_encryption_mode** | **str** | The types of WPA encryption. (&#39;WPA1 and WPA2&#39;, &#39;WPA2 only&#39;, &#39;WPA3 Transition Mode&#39; or &#39;WPA3 only&#39;). This param is only valid if (1) the authMode is &#39;psk&#39; &amp; the encryptionMode is &#39;wpa&#39; OR (2) the authMode is &#39;8021x-meraki&#39; OR (3) the authMode is &#39;8021x-radius&#39; | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_ssid_request import UpdateNetworkApplianceSsidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSsidRequest from a JSON string
update_network_appliance_ssid_request_instance = UpdateNetworkApplianceSsidRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSsidRequest.to_json())

# convert the object into a dict
update_network_appliance_ssid_request_dict = update_network_appliance_ssid_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceSsidRequest from a dict
update_network_appliance_ssid_request_from_dict = UpdateNetworkApplianceSsidRequest.from_dict(update_network_appliance_ssid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


