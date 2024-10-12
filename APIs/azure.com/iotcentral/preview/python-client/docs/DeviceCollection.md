# DeviceCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next page of devices. | [optional] 
**value** | [**List[Device]**](Device.md) | The collection of devices. | 

## Example

```python
from openapi_client.models.device_collection import DeviceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCollection from a JSON string
device_collection_instance = DeviceCollection.from_json(json)
# print the JSON string representation of the object
print(DeviceCollection.to_json())

# convert the object into a dict
device_collection_dict = device_collection_instance.to_dict()
# create an instance of DeviceCollection from a dict
device_collection_from_dict = DeviceCollection.from_dict(device_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


