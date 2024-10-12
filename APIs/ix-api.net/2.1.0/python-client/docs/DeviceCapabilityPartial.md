# DeviceCapabilityPartial

Device Capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **int** | Count of available ports on device  | [optional] [readonly] 
**max_lag** | **int** | Maximum count of ports which can be bundled to a max_lag | [optional] [readonly] 
**media_type** | **str** | The media type of the port (e.g. 1000BASE-LX, 10GBASE-LR, ...)  | [optional] [readonly] 
**speed** | **int** | Speed of port in Mbit/s  | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_capability_partial import DeviceCapabilityPartial

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCapabilityPartial from a JSON string
device_capability_partial_instance = DeviceCapabilityPartial.from_json(json)
# print the JSON string representation of the object
print(DeviceCapabilityPartial.to_json())

# convert the object into a dict
device_capability_partial_dict = device_capability_partial_instance.to_dict()
# create an instance of DeviceCapabilityPartial from a dict
device_capability_partial_from_dict = DeviceCapabilityPartial.from_dict(device_capability_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


