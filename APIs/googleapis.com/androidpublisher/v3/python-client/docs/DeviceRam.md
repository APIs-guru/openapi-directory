# DeviceRam

Conditions about a device's RAM capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_bytes** | **str** | Maximum RAM in bytes (bound excluded). | [optional] 
**min_bytes** | **str** | Minimum RAM in bytes (bound included). | [optional] 

## Example

```python
from openapi_client.models.device_ram import DeviceRam

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRam from a JSON string
device_ram_instance = DeviceRam.from_json(json)
# print the JSON string representation of the object
print(DeviceRam.to_json())

# convert the object into a dict
device_ram_dict = device_ram_instance.to_dict()
# create an instance of DeviceRam from a dict
device_ram_from_dict = DeviceRam.from_dict(device_ram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


