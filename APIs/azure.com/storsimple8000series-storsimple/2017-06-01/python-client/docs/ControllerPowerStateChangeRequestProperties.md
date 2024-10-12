# ControllerPowerStateChangeRequestProperties

The properties of the controller power state change request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The power state that the request is expecting for the controller of the device. | 
**active_controller** | **str** | The active controller that the request is expecting on the device. | 
**controller0_state** | **str** | The controller 0&#39;s status that the request is expecting on the device. | 
**controller1_state** | **str** | The controller 1&#39;s status that the request is expecting on the device. | 

## Example

```python
from openapi_client.models.controller_power_state_change_request_properties import ControllerPowerStateChangeRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerPowerStateChangeRequestProperties from a JSON string
controller_power_state_change_request_properties_instance = ControllerPowerStateChangeRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ControllerPowerStateChangeRequestProperties.to_json())

# convert the object into a dict
controller_power_state_change_request_properties_dict = controller_power_state_change_request_properties_instance.to_dict()
# create an instance of ControllerPowerStateChangeRequestProperties from a dict
controller_power_state_change_request_properties_from_dict = ControllerPowerStateChangeRequestProperties.from_dict(controller_power_state_change_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


