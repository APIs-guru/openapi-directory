# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis

SVI settings by protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4.md) |  | [optional] 
**ipv6** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Svis.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


