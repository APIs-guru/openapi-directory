# VirtualNetworkConfigurationStatus

Virtual network configuration status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated_time** | **datetime** | Last updated time for the configuration status. | [optional] [readonly] 
**status** | **str** | The virtual network configuration status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_configuration_status import VirtualNetworkConfigurationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkConfigurationStatus from a JSON string
virtual_network_configuration_status_instance = VirtualNetworkConfigurationStatus.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkConfigurationStatus.to_json())

# convert the object into a dict
virtual_network_configuration_status_dict = virtual_network_configuration_status_instance.to_dict()
# create an instance of VirtualNetworkConfigurationStatus from a dict
virtual_network_configuration_status_from_dict = VirtualNetworkConfigurationStatus.from_dict(virtual_network_configuration_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


