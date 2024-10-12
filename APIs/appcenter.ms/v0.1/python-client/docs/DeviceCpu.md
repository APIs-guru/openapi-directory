# DeviceCpu

CPU data for device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core** | **str** |  | [optional] 
**frequency** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_cpu import DeviceCpu

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCpu from a JSON string
device_cpu_instance = DeviceCpu.from_json(json)
# print the JSON string representation of the object
print(DeviceCpu.to_json())

# convert the object into a dict
device_cpu_dict = device_cpu_instance.to_dict()
# create an instance of DeviceCpu from a dict
device_cpu_from_dict = DeviceCpu.from_dict(device_cpu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


