# HardwareComponentGroup

The hardware component group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HardwareComponentGroupProperties**](HardwareComponentGroupProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hardware_component_group import HardwareComponentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareComponentGroup from a JSON string
hardware_component_group_instance = HardwareComponentGroup.from_json(json)
# print the JSON string representation of the object
print(HardwareComponentGroup.to_json())

# convert the object into a dict
hardware_component_group_dict = hardware_component_group_instance.to_dict()
# create an instance of HardwareComponentGroup from a dict
hardware_component_group_from_dict = HardwareComponentGroup.from_dict(hardware_component_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


