# ControllerPowerStateChangeRequest

The controller power state change request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ControllerPowerStateChangeRequestProperties**](ControllerPowerStateChangeRequestProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.controller_power_state_change_request import ControllerPowerStateChangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerPowerStateChangeRequest from a JSON string
controller_power_state_change_request_instance = ControllerPowerStateChangeRequest.from_json(json)
# print the JSON string representation of the object
print(ControllerPowerStateChangeRequest.to_json())

# convert the object into a dict
controller_power_state_change_request_dict = controller_power_state_change_request_instance.to_dict()
# create an instance of ControllerPowerStateChangeRequest from a dict
controller_power_state_change_request_from_dict = ControllerPowerStateChangeRequest.from_dict(controller_power_state_change_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


