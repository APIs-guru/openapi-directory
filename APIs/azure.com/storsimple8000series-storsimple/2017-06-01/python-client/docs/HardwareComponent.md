# HardwareComponent

The hardware component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** | The component ID. | 
**display_name** | **str** | The display name of the hardware component. | 
**status** | **str** | The status of the hardware component. | 
**status_display_name** | **str** | The display name of the status of hardware component. | 

## Example

```python
from openapi_client.models.hardware_component import HardwareComponent

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareComponent from a JSON string
hardware_component_instance = HardwareComponent.from_json(json)
# print the JSON string representation of the object
print(HardwareComponent.to_json())

# convert the object into a dict
hardware_component_dict = hardware_component_instance.to_dict()
# create an instance of HardwareComponent from a dict
hardware_component_from_dict = HardwareComponent.from_dict(hardware_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


