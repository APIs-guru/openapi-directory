# UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication

Settings for PPPoE Authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether PPPoE authentication is enabled. | [optional] 
**password** | **str** | Password for PPPoE authentication. This parameter is not returned. | [optional] 
**username** | **str** | Username for PPPoE authentication. | [optional] 

## Example

```python
from openapi_client.models.update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication import UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication from a JSON string
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication_instance = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication.to_json())

# convert the object into a dict
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication_dict = update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication_instance.to_dict()
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication from a dict
update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication_from_dict = UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1PppoeAuthentication.from_dict(update_device_appliance_uplinks_settings_request_interfaces_wan1_pppoe_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


