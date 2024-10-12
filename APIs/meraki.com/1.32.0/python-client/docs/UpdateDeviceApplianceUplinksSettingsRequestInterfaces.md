# UpdateDeviceApplianceUplinksSettingsRequestInterfaces

Interface settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wan1** | [**UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1**](UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan1.md) |  | [optional] 
**wan2** | [**UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2**](UpdateDeviceApplianceUplinksSettingsRequestInterfacesWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_appliance_uplinks_settings_request_interfaces import UpdateDeviceApplianceUplinksSettingsRequestInterfaces

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfaces from a JSON string
update_device_appliance_uplinks_settings_request_interfaces_instance = UpdateDeviceApplianceUplinksSettingsRequestInterfaces.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceApplianceUplinksSettingsRequestInterfaces.to_json())

# convert the object into a dict
update_device_appliance_uplinks_settings_request_interfaces_dict = update_device_appliance_uplinks_settings_request_interfaces_instance.to_dict()
# create an instance of UpdateDeviceApplianceUplinksSettingsRequestInterfaces from a dict
update_device_appliance_uplinks_settings_request_interfaces_from_dict = UpdateDeviceApplianceUplinksSettingsRequestInterfaces.from_dict(update_device_appliance_uplinks_settings_request_interfaces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


