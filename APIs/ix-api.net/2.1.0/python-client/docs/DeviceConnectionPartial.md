# DeviceConnectionPartial

Device Connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_max** | **int** |  | [optional] 
**connected_device** | **str** |  | [optional] 
**device** | **str** |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_connection_partial import DeviceConnectionPartial

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConnectionPartial from a JSON string
device_connection_partial_instance = DeviceConnectionPartial.from_json(json)
# print the JSON string representation of the object
print(DeviceConnectionPartial.to_json())

# convert the object into a dict
device_connection_partial_dict = device_connection_partial_instance.to_dict()
# create an instance of DeviceConnectionPartial from a dict
device_connection_partial_from_dict = DeviceConnectionPartial.from_dict(device_connection_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


