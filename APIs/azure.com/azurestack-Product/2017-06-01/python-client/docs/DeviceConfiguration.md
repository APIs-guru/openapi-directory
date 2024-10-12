# DeviceConfiguration

Device Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_version** | **str** | Version of the device. | [optional] [readonly] 
**identity_system** | **str** | Identity system of the device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_configuration import DeviceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConfiguration from a JSON string
device_configuration_instance = DeviceConfiguration.from_json(json)
# print the JSON string representation of the object
print(DeviceConfiguration.to_json())

# convert the object into a dict
device_configuration_dict = device_configuration_instance.to_dict()
# create an instance of DeviceConfiguration from a dict
device_configuration_from_dict = DeviceConfiguration.from_dict(device_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


