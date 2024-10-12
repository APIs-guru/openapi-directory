# TestGetDeviceConfigurations200ResponseInnerModel


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
from openapi_client.models.test_get_device_configurations200_response_inner_model import TestGetDeviceConfigurations200ResponseInnerModel

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetDeviceConfigurations200ResponseInnerModel from a JSON string
test_get_device_configurations200_response_inner_model_instance = TestGetDeviceConfigurations200ResponseInnerModel.from_json(json)
# print the JSON string representation of the object
print(TestGetDeviceConfigurations200ResponseInnerModel.to_json())

# convert the object into a dict
test_get_device_configurations200_response_inner_model_dict = test_get_device_configurations200_response_inner_model_instance.to_dict()
# create an instance of TestGetDeviceConfigurations200ResponseInnerModel from a dict
test_get_device_configurations200_response_inner_model_from_dict = TestGetDeviceConfigurations200ResponseInnerModel.from_dict(test_get_device_configurations200_response_inner_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


