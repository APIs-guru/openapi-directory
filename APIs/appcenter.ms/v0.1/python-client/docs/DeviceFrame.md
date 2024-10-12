# DeviceFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full** | [**TestGetDeviceConfigurations200ResponseInnerModelDeviceFrameFull**](TestGetDeviceConfigurations200ResponseInnerModelDeviceFrameFull.md) |  | [optional] 
**grid** | [**TestGetDeviceConfigurations200ResponseInnerModelDeviceFrameFull**](TestGetDeviceConfigurations200ResponseInnerModelDeviceFrameFull.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_frame import DeviceFrame

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFrame from a JSON string
device_frame_instance = DeviceFrame.from_json(json)
# print the JSON string representation of the object
print(DeviceFrame.to_json())

# convert the object into a dict
device_frame_dict = device_frame_instance.to_dict()
# create an instance of DeviceFrame from a dict
device_frame_from_dict = DeviceFrame.from_dict(device_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


