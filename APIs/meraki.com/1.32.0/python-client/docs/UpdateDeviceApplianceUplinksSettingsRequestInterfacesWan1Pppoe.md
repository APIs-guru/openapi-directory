# UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe

Configuration options for PPPoE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication**](UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication.md) |  | [optional] 
**enabled** | **bool** | Whether PPPoE is enabled. | [optional] 

## Example

```python
from openapi_client.models.update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe import UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe from a JSON string
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_instance = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe.to_json())

# convert the object into a dict
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_dict = update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_instance.to_dict()
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe from a dict
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_from_dict = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1Pppoe.from_dict(update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


