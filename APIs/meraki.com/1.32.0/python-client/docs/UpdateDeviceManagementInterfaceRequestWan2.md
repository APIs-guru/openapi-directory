# UpdateDeviceManagementInterfaceRequestWan2

WAN 2 settings (only for MX devices)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**static_dns** | **List[str]** | Up to two DNS IPs. | [optional] 
**static_gateway_ip** | **str** | The IP of the gateway on the WAN. | [optional] 
**static_ip** | **str** | The IP the device should use on the WAN. | [optional] 
**static_subnet_mask** | **str** | The subnet mask for the WAN. | [optional] 
**using_static_ip** | **bool** | Configure the interface to have static IP settings or use DHCP. | [optional] 
**vlan** | **int** | The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false. | [optional] 
**wan_enabled** | **str** | Enable or disable the interface (only for MX devices). Valid values are &#39;enabled&#39;, &#39;disabled&#39;, and &#39;not configured&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_device_management_interface_request_wan2 import UpdateDeviceManagementInterfaceRequestWan2

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceManagementInterfaceRequestWan2 from a JSON string
update_device_management_interface_request_wan2_instance = UpdateDeviceManagementInterfaceRequestWan2.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceManagementInterfaceRequestWan2.to_json())

# convert the object into a dict
update_device_management_interface_request_wan2_dict = update_device_management_interface_request_wan2_instance.to_dict()
# create an instance of UpdateDeviceManagementInterfaceRequestWan2 from a dict
update_device_management_interface_request_wan2_from_dict = UpdateDeviceManagementInterfaceRequestWan2.from_dict(update_device_management_interface_request_wan2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


