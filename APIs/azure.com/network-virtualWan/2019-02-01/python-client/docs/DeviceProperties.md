# DeviceProperties

List of properties of the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_model** | **str** | Model of the device. | [optional] 
**device_vendor** | **str** | Name of the device Vendor. | [optional] 
**link_speed_in_mbps** | **int** | Link speed. | [optional] 

## Example

```python
from openapi_client.models.device_properties import DeviceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceProperties from a JSON string
device_properties_instance = DeviceProperties.from_json(json)
# print the JSON string representation of the object
print(DeviceProperties.to_json())

# convert the object into a dict
device_properties_dict = device_properties_instance.to_dict()
# create an instance of DeviceProperties from a dict
device_properties_from_dict = DeviceProperties.from_dict(device_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


