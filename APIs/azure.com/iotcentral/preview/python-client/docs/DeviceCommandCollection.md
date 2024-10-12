# DeviceCommandCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DeviceCommand]**](DeviceCommand.md) | The collection of device command executions. | 

## Example

```python
from openapi_client.models.device_command_collection import DeviceCommandCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCommandCollection from a JSON string
device_command_collection_instance = DeviceCommandCollection.from_json(json)
# print the JSON string representation of the object
print(DeviceCommandCollection.to_json())

# convert the object into a dict
device_command_collection_dict = device_command_collection_instance.to_dict()
# create an instance of DeviceCommandCollection from a dict
device_command_collection_from_dict = DeviceCommandCollection.from_dict(device_command_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


