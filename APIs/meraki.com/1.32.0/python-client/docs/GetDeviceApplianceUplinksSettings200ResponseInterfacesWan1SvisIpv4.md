# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4

IPv4 settings for static/dynamic mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IP address and subnet mask when in static mode. | [optional] 
**assignment_mode** | **str** | The assignment mode for this SVI. Applies only when PPPoE is disabled. | [optional] 
**gateway** | **str** | Gateway IP address when in static mode. | [optional] 
**nameservers** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4 import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4 from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4 from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


