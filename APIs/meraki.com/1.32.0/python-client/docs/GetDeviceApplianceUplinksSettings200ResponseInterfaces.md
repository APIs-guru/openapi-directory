# GetDeviceApplianceUplinksSettings200ResponseInterfaces

Interface settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wan1** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1.md) |  | [optional] 
**wan2** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan2**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces import GetDeviceApplianceUplinksSettings200ResponseInterfaces

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfaces from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_instance = GetDeviceApplianceUplinksSettings200ResponseInterfaces.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfaces.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_dict = get_device_appliance_uplinks_settings200_response_interfaces_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfaces from a dict
get_device_appliance_uplinks_settings200_response_interfaces_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfaces.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


