# VirtualMachinePreferencesNetworkCostParameters

Parameters that affect network cost estimations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_egress_traffic_percentage** | **int** | Optional. An estimated percentage of priced outbound traffic (egress traffic) from the measured outbound traffic. Must be in the interval [0, 100]. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_preferences_network_cost_parameters import VirtualMachinePreferencesNetworkCostParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachinePreferencesNetworkCostParameters from a JSON string
virtual_machine_preferences_network_cost_parameters_instance = VirtualMachinePreferencesNetworkCostParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachinePreferencesNetworkCostParameters.to_json())

# convert the object into a dict
virtual_machine_preferences_network_cost_parameters_dict = virtual_machine_preferences_network_cost_parameters_instance.to_dict()
# create an instance of VirtualMachinePreferencesNetworkCostParameters from a dict
virtual_machine_preferences_network_cost_parameters_from_dict = VirtualMachinePreferencesNetworkCostParameters.from_dict(virtual_machine_preferences_network_cost_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


