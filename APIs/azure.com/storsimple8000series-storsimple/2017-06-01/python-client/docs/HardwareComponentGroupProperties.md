# HardwareComponentGroupProperties

The properties of hardware component group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | [**List[HardwareComponent]**](HardwareComponent.md) | The list of hardware components. | 
**display_name** | **str** | The display name the hardware component group. | 
**last_updated_time** | **datetime** | The last updated time. | 

## Example

```python
from openapi_client.models.hardware_component_group_properties import HardwareComponentGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareComponentGroupProperties from a JSON string
hardware_component_group_properties_instance = HardwareComponentGroupProperties.from_json(json)
# print the JSON string representation of the object
print(HardwareComponentGroupProperties.to_json())

# convert the object into a dict
hardware_component_group_properties_dict = hardware_component_group_properties_instance.to_dict()
# create an instance of HardwareComponentGroupProperties from a dict
hardware_component_group_properties_from_dict = HardwareComponentGroupProperties.from_dict(hardware_component_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


