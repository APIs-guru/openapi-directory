# UpdateDeviceManagementInterfaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wan1** | [**UpdateDeviceManagementInterfaceRequestWan1**](UpdateDeviceManagementInterfaceRequestWan1.md) |  | [optional] 
**wan2** | [**UpdateDeviceManagementInterfaceRequestWan2**](UpdateDeviceManagementInterfaceRequestWan2.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_management_interface_request import UpdateDeviceManagementInterfaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceManagementInterfaceRequest from a JSON string
update_device_management_interface_request_instance = UpdateDeviceManagementInterfaceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceManagementInterfaceRequest.to_json())

# convert the object into a dict
update_device_management_interface_request_dict = update_device_management_interface_request_instance.to_dict()
# create an instance of UpdateDeviceManagementInterfaceRequest from a dict
update_device_management_interface_request_from_dict = UpdateDeviceManagementInterfaceRequest.from_dict(update_device_management_interface_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


