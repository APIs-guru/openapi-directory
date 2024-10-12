# IoTDeviceInfo

Metadata of IoT device/IoT Edge device to be configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**Authentication**](Authentication.md) |  | [optional] 
**device_id** | **str** | ID of the IoT device/edge device. | 
**io_t_host_hub** | **str** | Host name for the IoT hub associated to the device. | 
**io_t_host_hub_id** | **str** | Id for the IoT hub associated to the device. | [optional] 

## Example

```python
from openapi_client.models.io_t_device_info import IoTDeviceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IoTDeviceInfo from a JSON string
io_t_device_info_instance = IoTDeviceInfo.from_json(json)
# print the JSON string representation of the object
print(IoTDeviceInfo.to_json())

# convert the object into a dict
io_t_device_info_dict = io_t_device_info_instance.to_dict()
# create an instance of IoTDeviceInfo from a dict
io_t_device_info_from_dict = IoTDeviceInfo.from_dict(io_t_device_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


