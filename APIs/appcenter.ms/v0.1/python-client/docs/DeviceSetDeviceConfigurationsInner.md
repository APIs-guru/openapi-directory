# DeviceSetDeviceConfigurationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique id of the device configuration | [optional] 
**image** | [**DeviceSetDeviceConfigurationsInnerImage**](DeviceSetDeviceConfigurationsInnerImage.md) |  | [optional] 
**model** | [**DeviceSetDeviceConfigurationsInnerModel**](DeviceSetDeviceConfigurationsInnerModel.md) |  | [optional] 
**os** | **str** |  | [optional] 
**os_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_set_device_configurations_inner import DeviceSetDeviceConfigurationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSetDeviceConfigurationsInner from a JSON string
device_set_device_configurations_inner_instance = DeviceSetDeviceConfigurationsInner.from_json(json)
# print the JSON string representation of the object
print(DeviceSetDeviceConfigurationsInner.to_json())

# convert the object into a dict
device_set_device_configurations_inner_dict = device_set_device_configurations_inner_instance.to_dict()
# create an instance of DeviceSetDeviceConfigurationsInner from a dict
device_set_device_configurations_inner_from_dict = DeviceSetDeviceConfigurationsInner.from_dict(device_set_device_configurations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


