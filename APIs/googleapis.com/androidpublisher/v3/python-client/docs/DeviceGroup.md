# DeviceGroup

A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_selectors** | [**List[DeviceSelector]**](DeviceSelector.md) | Device selectors for this group. A device matching any of the selectors is included in this group. | [optional] 
**name** | **str** | The name of the group. | [optional] 

## Example

```python
from openapi_client.models.device_group import DeviceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceGroup from a JSON string
device_group_instance = DeviceGroup.from_json(json)
# print the JSON string representation of the object
print(DeviceGroup.to_json())

# convert the object into a dict
device_group_dict = device_group_instance.to_dict()
# create an instance of DeviceGroup from a dict
device_group_from_dict = DeviceGroup.from_dict(device_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


