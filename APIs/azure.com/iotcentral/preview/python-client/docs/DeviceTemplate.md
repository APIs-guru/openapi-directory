# DeviceTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability_model** | [**CapabilityModel**](CapabilityModel.md) |  | 
**description** | **str** | Detailed description of the device template. | [optional] 
**display_name** | **str** | Display name of the device template. | [optional] 
**etag** | **str** | ETag used to prevent conflict in device template updates. | [optional] 
**id** | **str** | Unique ID of the device template. | [optional] [readonly] 
**solution_model** | [**SolutionModel**](SolutionModel.md) |  | [optional] 
**types** | **List[str]** | The types of device to which this template applies. | 

## Example

```python
from openapi_client.models.device_template import DeviceTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTemplate from a JSON string
device_template_instance = DeviceTemplate.from_json(json)
# print the JSON string representation of the object
print(DeviceTemplate.to_json())

# convert the object into a dict
device_template_dict = device_template_instance.to_dict()
# create an instance of DeviceTemplate from a dict
device_template_from_dict = DeviceTemplate.from_dict(device_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


