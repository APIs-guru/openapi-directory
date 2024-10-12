# DeviceSelector

Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_ram** | [**DeviceRam**](DeviceRam.md) |  | [optional] 
**excluded_device_ids** | [**List[DeviceId]**](DeviceId.md) | Device models excluded by this selector, even if they match all other conditions. | [optional] 
**forbidden_system_features** | [**List[SystemFeature]**](SystemFeature.md) | A device that has any of these system features is excluded by this selector, even if it matches all other conditions. | [optional] 
**included_device_ids** | [**List[DeviceId]**](DeviceId.md) | Device models included by this selector. | [optional] 
**required_system_features** | [**List[SystemFeature]**](SystemFeature.md) | A device needs to have all these system features to be included by the selector. | [optional] 

## Example

```python
from openapi_client.models.device_selector import DeviceSelector

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSelector from a JSON string
device_selector_instance = DeviceSelector.from_json(json)
# print the JSON string representation of the object
print(DeviceSelector.to_json())

# convert the object into a dict
device_selector_dict = device_selector_instance.to_dict()
# create an instance of DeviceSelector from a dict
device_selector_from_dict = DeviceSelector.from_dict(device_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


