# DeviceResolution

Device screen resolution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** |  | [optional] 
**ppi** | **str** |  | [optional] 
**width** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_resolution import DeviceResolution

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceResolution from a JSON string
device_resolution_instance = DeviceResolution.from_json(json)
# print the JSON string representation of the object
print(DeviceResolution.to_json())

# convert the object into a dict
device_resolution_dict = device_resolution_instance.to_dict()
# create an instance of DeviceResolution from a dict
device_resolution_from_dict = DeviceResolution.from_dict(device_resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


