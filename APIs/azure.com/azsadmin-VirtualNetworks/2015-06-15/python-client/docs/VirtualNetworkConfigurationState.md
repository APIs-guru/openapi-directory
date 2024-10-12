# VirtualNetworkConfigurationState

The virtual network configuration state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_errors** | [**List[VirtualNetworkConfigurationStatus]**](VirtualNetworkConfigurationStatus.md) | List of NIC errors associated with the resource. | [optional] 
**last_updated_time** | **datetime** | Last updated time for the running state. | [optional] [readonly] 
**status** | **str** | The virtual network status. | [optional] [readonly] 
**virtual_network_interface_errors** | [**List[VirtualNetworkConfigurationStatus]**](VirtualNetworkConfigurationStatus.md) | List of NIC errors associated with the resource. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_configuration_state import VirtualNetworkConfigurationState

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkConfigurationState from a JSON string
virtual_network_configuration_state_instance = VirtualNetworkConfigurationState.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkConfigurationState.to_json())

# convert the object into a dict
virtual_network_configuration_state_dict = virtual_network_configuration_state_instance.to_dict()
# create an instance of VirtualNetworkConfigurationState from a dict
virtual_network_configuration_state_from_dict = VirtualNetworkConfigurationState.from_dict(virtual_network_configuration_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


