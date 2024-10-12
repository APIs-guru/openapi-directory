# UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | The IP address you want to assign to a specific server or device | 
**mac** | **str** | The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address | 
**name** | **str** | A descriptive name of the assignment | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner import UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner from a JSON string
update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner_instance = UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner.to_json())

# convert the object into a dict
update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner_dict = update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner from a dict
update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner_from_dict = UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner.from_dict(update_device_cellular_gateway_settings_request_fixed_ip_assignments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


