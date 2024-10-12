# GetNetworkApplianceSsids200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **str** | The association control method for the SSID. | [optional] 
**default_vlan_id** | **int** | The VLAN ID of the VLAN associated to this SSID. | [optional] 
**enabled** | **bool** | Whether or not the SSID is enabled. | [optional] 
**encryption_mode** | **str** | The psk encryption mode for the SSID. | [optional] 
**name** | **str** | The name of the SSID. | [optional] 
**number** | **int** | The number of the SSID. | [optional] 
**radius_servers** | [**List[GetNetworkApplianceSsids200ResponseInnerRadiusServersInner]**](GetNetworkApplianceSsids200ResponseInnerRadiusServersInner.md) | The RADIUS 802.1x servers to be used for authentication. | [optional] 
**visible** | **bool** | Boolean indicating whether the MX should advertise or hide this SSID. | [optional] 
**wpa_encryption_mode** | **str** | WPA encryption mode for the SSID. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSsids200ResponseInner from a JSON string
get_network_appliance_ssids200_response_inner_instance = GetNetworkApplianceSsids200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSsids200ResponseInner.to_json())

# convert the object into a dict
get_network_appliance_ssids200_response_inner_dict = get_network_appliance_ssids200_response_inner_instance.to_dict()
# create an instance of GetNetworkApplianceSsids200ResponseInner from a dict
get_network_appliance_ssids200_response_inner_from_dict = GetNetworkApplianceSsids200ResponseInner.from_dict(get_network_appliance_ssids200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


