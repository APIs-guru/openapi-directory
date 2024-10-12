# GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication

Settings for PPPoE Authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether PPPoE authentication is enabled. | [optional] 
**username** | **str** | Username for PPPoE authentication. | [optional] 

## Example

```python
from openapi_client.models.get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication import GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication from a JSON string
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication_instance = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication.from_json(json)
# print the JSON string representation of the object
print(GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication.to_json())

# convert the object into a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication_dict = get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication_instance.to_dict()
# create an instance of GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication from a dict
get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication_from_dict = GetDeviceApplianceUplinksSettings200ResponseInterfacesWan1PppoeAuthentication.from_dict(get_device_appliance_uplinks_settings200_response_interfaces_wan1_pppoe_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


