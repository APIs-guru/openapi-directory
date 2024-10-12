# DeviceConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_max** | **int** |  | 
**connected_device** | **str** |  | 
**device** | **str** |  | 
**id** | **str** |  | 

## Example

```python
from openapi_client.models.device_connection import DeviceConnection

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConnection from a JSON string
device_connection_instance = DeviceConnection.from_json(json)
# print the JSON string representation of the object
print(DeviceConnection.to_json())

# convert the object into a dict
device_connection_dict = device_connection_instance.to_dict()
# create an instance of DeviceConnection from a dict
device_connection_from_dict = DeviceConnection.from_dict(device_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


