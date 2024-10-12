# DeviceSetUpdate

The name of the device set and the list of device IDs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **List[str]** | List of device IDs | 
**name** | **str** | The name of the device set | 

## Example

```python
from openapi_client.models.device_set_update import DeviceSetUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSetUpdate from a JSON string
device_set_update_instance = DeviceSetUpdate.from_json(json)
# print the JSON string representation of the object
print(DeviceSetUpdate.to_json())

# convert the object into a dict
device_set_update_dict = device_set_update_instance.to_dict()
# create an instance of DeviceSetUpdate from a dict
device_set_update_from_dict = DeviceSetUpdate.from_dict(device_set_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


