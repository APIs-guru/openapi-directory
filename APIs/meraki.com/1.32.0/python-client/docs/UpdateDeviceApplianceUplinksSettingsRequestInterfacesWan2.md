# UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2

WAN 2 settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable or disable the interface. | [optional] 
**pppoe** | [**UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe**](UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe.md) |  | [optional] 
**svis** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis.md) |  | [optional] 
**vlan_tagging** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1VlanTagging.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_appliance_uplinks_settings_request_interfaces_wan2 import UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2 from a JSON string
update_device_appliance_uplinks_settings_request_interfaces_wan2_instance = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2.to_json())

# convert the object into a dict
update_device_appliance_uplinks_settings_request_interfaces_wan2_dict = update_device_appliance_uplinks_settings_request_interfaces_wan2_instance.to_dict()
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2 from a dict
update_device_appliance_uplinks_settings_request_interfaces_wan2_from_dict = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2.from_dict(update_device_appliance_uplinks_settings_request_interfaces_wan2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


