# HardwareComponentGroupList

The collection of hardware component groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[HardwareComponentGroup]**](HardwareComponentGroup.md) | The value. | 

## Example

```python
from openapi_client.models.hardware_component_group_list import HardwareComponentGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareComponentGroupList from a JSON string
hardware_component_group_list_instance = HardwareComponentGroupList.from_json(json)
# print the JSON string representation of the object
print(HardwareComponentGroupList.to_json())

# convert the object into a dict
hardware_component_group_list_dict = hardware_component_group_list_instance.to_dict()
# create an instance of HardwareComponentGroupList from a dict
hardware_component_group_list_from_dict = HardwareComponentGroupList.from_dict(hardware_component_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


