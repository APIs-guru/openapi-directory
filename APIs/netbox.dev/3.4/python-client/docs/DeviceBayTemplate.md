# DeviceBayTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_bay_template import DeviceBayTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceBayTemplate from a JSON string
device_bay_template_instance = DeviceBayTemplate.from_json(json)
# print the JSON string representation of the object
print(DeviceBayTemplate.to_json())

# convert the object into a dict
device_bay_template_dict = device_bay_template_instance.to_dict()
# create an instance of DeviceBayTemplate from a dict
device_bay_template_from_dict = DeviceBayTemplate.from_dict(device_bay_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


