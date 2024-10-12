# DeviceScreenSize

Physical device screen dimensions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cm** | **str** |  | [optional] 
**var_in** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_screen_size import DeviceScreenSize

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceScreenSize from a JSON string
device_screen_size_instance = DeviceScreenSize.from_json(json)
# print the JSON string representation of the object
print(DeviceScreenSize.to_json())

# convert the object into a dict
device_screen_size_dict = device_screen_size_instance.to_dict()
# create an instance of DeviceScreenSize from a dict
device_screen_size_from_dict = DeviceScreenSize.from_dict(device_screen_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


