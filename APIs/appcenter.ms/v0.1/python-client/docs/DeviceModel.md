# DeviceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_count** | **float** |  | [optional] 
**cpu** | [**TestGetDeviceConfigurations200ResponseInnerModelCpu**](TestGetDeviceConfigurations200ResponseInnerModelCpu.md) |  | [optional] 
**device_frame** | [**TestGetDeviceConfigurations200ResponseInnerModelDeviceFrame**](TestGetDeviceConfigurations200ResponseInnerModelDeviceFrame.md) |  | [optional] 
**dimensions** | [**TestGetDeviceConfigurations200ResponseInnerModelDimensions**](TestGetDeviceConfigurations200ResponseInnerModelDimensions.md) |  | [optional] 
**form_factor** | **str** |  | [optional] 
**manufacturer** | **str** |  | [optional] 
**memory** | [**TestGetDeviceConfigurations200ResponseInnerModelMemory**](TestGetDeviceConfigurations200ResponseInnerModelMemory.md) |  | [optional] 
**model** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**platform** | **str** |  | [optional] 
**release_date** | **str** |  | [optional] 
**resolution** | [**TestGetDeviceConfigurations200ResponseInnerModelResolution**](TestGetDeviceConfigurations200ResponseInnerModelResolution.md) |  | [optional] 
**screen_rotation** | **float** |  | [optional] 
**screen_size** | [**TestGetDeviceConfigurations200ResponseInnerModelScreenSize**](TestGetDeviceConfigurations200ResponseInnerModelScreenSize.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_model import DeviceModel

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceModel from a JSON string
device_model_instance = DeviceModel.from_json(json)
# print the JSON string representation of the object
print(DeviceModel.to_json())

# convert the object into a dict
device_model_dict = device_model_instance.to_dict()
# create an instance of DeviceModel from a dict
device_model_from_dict = DeviceModel.from_dict(device_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


