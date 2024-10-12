# DevicePartial

Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[DeviceCapability]**](DeviceCapability.md) |  | [optional] 
**facility** | **str** | Identifier of the facility where the device is physically based. | [optional] [readonly] 
**id** | **str** |  | [optional] 
**name** | **str** | Name of the device  | [optional] 
**pop** | **str** | The &#x60;PointOfPresence&#x60; the device is in. | [optional] 

## Example

```python
from openapi_client.models.device_partial import DevicePartial

# TODO update the JSON string below
json = "{}"
# create an instance of DevicePartial from a JSON string
device_partial_instance = DevicePartial.from_json(json)
# print the JSON string representation of the object
print(DevicePartial.to_json())

# convert the object into a dict
device_partial_dict = device_partial_instance.to_dict()
# create an instance of DevicePartial from a dict
device_partial_from_dict = DevicePartial.from_dict(device_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


