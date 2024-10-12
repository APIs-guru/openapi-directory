# GetNetworkSmDeviceSecurityCenters200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anti_virus_name** | **str** | The name of the Antivirus. | [optional] 
**fire_wall_name** | **str** | The name of the Firewall. | [optional] 
**has_anti_virus** | **bool** | Boolean indicating if the device has Antivirus. | [optional] 
**has_fire_wall_installed** | **bool** | Boolean indicating if the device has a Firewall installed. | [optional] 
**id** | **str** | The Meraki identifier for the security center record. | [optional] 
**is_auto_login_disabled** | **bool** | Boolean indicating if the device has auto login disabled. | [optional] 
**is_disk_encrypted** | **bool** | Boolean indicating if the device has disk encryption. | [optional] 
**is_fire_wall_enabled** | **bool** | Boolean indicating if the device has a Firewall enabled. | [optional] 
**is_rooted** | **bool** | Boolean indicating if the device is rooted. | [optional] 
**running_procs** | **str** | A comma seperated list of procs running on the device. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_security_centers200_response_inner import GetNetworkSmDeviceSecurityCenters200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceSecurityCenters200ResponseInner from a JSON string
get_network_sm_device_security_centers200_response_inner_instance = GetNetworkSmDeviceSecurityCenters200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceSecurityCenters200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_security_centers200_response_inner_dict = get_network_sm_device_security_centers200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceSecurityCenters200ResponseInner from a dict
get_network_sm_device_security_centers200_response_inner_from_dict = GetNetworkSmDeviceSecurityCenters200ResponseInner.from_dict(get_network_sm_device_security_centers200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


