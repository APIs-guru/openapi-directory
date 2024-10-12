# DeviceSetConfiguration


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
from openapi_client.models.device_set_configuration import DeviceSetConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSetConfiguration from a JSON string
device_set_configuration_instance = DeviceSetConfiguration.from_json(json)
# print the JSON string representation of the object
print(DeviceSetConfiguration.to_json())

# convert the object into a dict
device_set_configuration_dict = device_set_configuration_instance.to_dict()
# create an instance of DeviceSetConfiguration from a dict
device_set_configuration_from_dict = DeviceSetConfiguration.from_dict(device_set_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


