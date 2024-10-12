# GetNetworkSmDeviceDeviceCommandLogs200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The type of command sent to the device. | [optional] 
**dashboard_user** | **str** | The Meraki dashboard user who initiated the command. | [optional] 
**details** | **str** | A JSON string object containing command details. | [optional] 
**name** | **str** | The name of the device to which the command is sent. | [optional] 
**ts** | **str** | The time the command was sent to the device. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_device_command_logs200_response_inner import GetNetworkSmDeviceDeviceCommandLogs200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceDeviceCommandLogs200ResponseInner from a JSON string
get_network_sm_device_device_command_logs200_response_inner_instance = GetNetworkSmDeviceDeviceCommandLogs200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceDeviceCommandLogs200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_device_command_logs200_response_inner_dict = get_network_sm_device_device_command_logs200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceDeviceCommandLogs200ResponseInner from a dict
get_network_sm_device_device_command_logs200_response_inner_from_dict = GetNetworkSmDeviceDeviceCommandLogs200ResponseInner.from_dict(get_network_sm_device_device_command_logs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


