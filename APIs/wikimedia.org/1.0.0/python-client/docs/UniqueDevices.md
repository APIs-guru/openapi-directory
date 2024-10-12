# UniqueDevices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[UniqueDevicesItemsInner]**](UniqueDevicesItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.unique_devices import UniqueDevices

# TODO update the JSON string below
json = "{}"
# create an instance of UniqueDevices from a JSON string
unique_devices_instance = UniqueDevices.from_json(json)
# print the JSON string representation of the object
print(UniqueDevices.to_json())

# convert the object into a dict
unique_devices_dict = unique_devices_instance.to_dict()
# create an instance of UniqueDevices from a dict
unique_devices_from_dict = UniqueDevices.from_dict(unique_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


