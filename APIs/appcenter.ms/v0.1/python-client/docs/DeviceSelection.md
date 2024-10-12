# DeviceSelection

Short ID for a list of device IDs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short_id** | **str** | Identifier of the device selection | 

## Example

```python
from openapi_client.models.device_selection import DeviceSelection

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSelection from a JSON string
device_selection_instance = DeviceSelection.from_json(json)
# print the JSON string representation of the object
print(DeviceSelection.to_json())

# convert the object into a dict
device_selection_dict = device_selection_instance.to_dict()
# create an instance of DeviceSelection from a dict
device_selection_from_dict = DeviceSelection.from_dict(device_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


