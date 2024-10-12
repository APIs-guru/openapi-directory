# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe

Configuration options for PPPoE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication**](GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication.md) |  | [optional] 
**enabled** | **bool** | Whether PPPoE is enabled. | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1Pppoe.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


