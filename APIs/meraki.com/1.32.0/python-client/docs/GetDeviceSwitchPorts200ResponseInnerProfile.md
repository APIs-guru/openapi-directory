# GetDeviceSwitchPorts200ResponseInnerProfile

Profile attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | When enabled, override this port&#39;s configuration with a port profile. | [optional] 
**id** | **str** | When enabled, the ID of the port profile used to override the port&#39;s configuration. | [optional] 
**iname** | **str** | When enabled, the IName of the profile. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports200_response_inner_profile import GetDeviceSwitchPorts200ResponseInnerProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPorts200ResponseInnerProfile from a JSON string
get_device_switch_ports200_response_inner_profile_instance = GetDeviceSwitchPorts200ResponseInnerProfile.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPorts200ResponseInnerProfile.to_json())

# convert the object into a dict
get_device_switch_ports200_response_inner_profile_dict = get_device_switch_ports200_response_inner_profile_instance.to_dict()
# create an instance of GetDeviceSwitchPorts200ResponseInnerProfile from a dict
get_device_switch_ports200_response_inner_profile_from_dict = GetDeviceSwitchPorts200ResponseInnerProfile.from_dict(get_device_switch_ports200_response_inner_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


