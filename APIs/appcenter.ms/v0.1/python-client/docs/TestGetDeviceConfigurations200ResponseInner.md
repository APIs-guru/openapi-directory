# TestGetDeviceConfigurations200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique id of the device configuration | [optional] 
**image** | [**TestGetDeviceConfigurations200ResponseInnerImage**](TestGetDeviceConfigurations200ResponseInnerImage.md) |  | [optional] 
**market_share** | **float** |  | [optional] 
**model** | [**TestGetDeviceConfigurations200ResponseInnerModel**](TestGetDeviceConfigurations200ResponseInnerModel.md) |  | [optional] 
**name** | **str** | The name of the device model and OS version | [optional] 
**os** | **str** |  | [optional] 
**os_name** | **str** |  | [optional] 
**tier** | **float** | The tier | [optional] 

## Example

```python
from openapi_client.models.test_get_device_configurations200_response_inner import TestGetDeviceConfigurations200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetDeviceConfigurations200ResponseInner from a JSON string
test_get_device_configurations200_response_inner_instance = TestGetDeviceConfigurations200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(TestGetDeviceConfigurations200ResponseInner.to_json())

# convert the object into a dict
test_get_device_configurations200_response_inner_dict = test_get_device_configurations200_response_inner_instance.to_dict()
# create an instance of TestGetDeviceConfigurations200ResponseInner from a dict
test_get_device_configurations200_response_inner_from_dict = TestGetDeviceConfigurations200ResponseInner.from_dict(test_get_device_configurations200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


