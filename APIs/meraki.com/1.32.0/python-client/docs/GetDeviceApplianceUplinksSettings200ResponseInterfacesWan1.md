# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1

WAN 1 settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable or disable the interface. | [optional] 
**pppoe** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe.md) |  | [optional] 
**svis** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis.md) |  | [optional] 
**vlan_tagging** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1 import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1 from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1 from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


