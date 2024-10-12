# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers

The nameserver settings for this SVI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **List[str]** | Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority. | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1SvisIpv4Nameservers.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_svis_ipv4_nameservers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


