# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging

VLAN tagging settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether VLAN tagging is enabled. | [optional] 
**vlan_id** | **int** | The ID of the VLAN to use for VLAN tagging. | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_vlan_tagging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


