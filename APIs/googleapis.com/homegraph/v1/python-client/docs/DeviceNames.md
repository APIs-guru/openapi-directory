# DeviceNames

Identifiers used to describe the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_names** | **List[str]** | List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc. | [optional] 
**name** | **str** | Primary name of the device, generally provided by the user. | [optional] 
**nicknames** | **List[str]** | Additional names provided by the user for the device. | [optional] 

## Example

```python
from openapi_client.models.device_names import DeviceNames

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceNames from a JSON string
device_names_instance = DeviceNames.from_json(json)
# print the JSON string representation of the object
print(DeviceNames.to_json())

# convert the object into a dict
device_names_dict = device_names_instance.to_dict()
# create an instance of DeviceNames from a dict
device_names_from_dict = DeviceNames.from_dict(device_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


