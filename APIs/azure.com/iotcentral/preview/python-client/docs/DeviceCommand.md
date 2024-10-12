# DeviceCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The request ID of the device command execution. | [optional] [readonly] 
**request** | **object** | The payload for the device command. | [optional] 
**response** | **object** | The payload of the device command response. | [optional] [readonly] 
**response_code** | **float** | The status code of the device command response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_command import DeviceCommand

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCommand from a JSON string
device_command_instance = DeviceCommand.from_json(json)
# print the JSON string representation of the object
print(DeviceCommand.to_json())

# convert the object into a dict
device_command_dict = device_command_instance.to_dict()
# create an instance of DeviceCommand from a dict
device_command_from_dict = DeviceCommand.from_dict(device_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


