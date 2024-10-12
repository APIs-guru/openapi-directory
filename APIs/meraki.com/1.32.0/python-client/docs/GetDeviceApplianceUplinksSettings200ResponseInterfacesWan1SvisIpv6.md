# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6

IPv6 settings for static/dynamic mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Static address that will override the one(s) received by SLAAC. | [optional] 
**assignment_mode** | **str** | The assignment mode for this SVI. Applies only when PPPoE is disabled. | [optional] 
**gateway** | **str** | Static gateway that will override the one received by autoconf. | [optional] 
**nameservers** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6 import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6 from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6 from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv6.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


