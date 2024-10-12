# NetworkMappingProperties

Network Mapping Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_specific_settings** | [**NetworkMappingFabricSpecificSettings**](NetworkMappingFabricSpecificSettings.md) |  | [optional] 
**primary_fabric_friendly_name** | **str** | The primary fabric friendly name. | [optional] 
**primary_network_friendly_name** | **str** | The primary network friendly name. | [optional] 
**primary_network_id** | **str** | The primary network id for network mapping. | [optional] 
**recovery_fabric_arm_id** | **str** | The recovery fabric ARM id. | [optional] 
**recovery_fabric_friendly_name** | **str** | The recovery fabric friendly name. | [optional] 
**recovery_network_friendly_name** | **str** | The recovery network friendly name. | [optional] 
**recovery_network_id** | **str** | The recovery network id for network mapping. | [optional] 
**state** | **str** | The pairing state for network mapping. | [optional] 

## Example

```python
from openapi_client.models.network_mapping_properties import NetworkMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkMappingProperties from a JSON string
network_mapping_properties_instance = NetworkMappingProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkMappingProperties.to_json())

# convert the object into a dict
network_mapping_properties_dict = network_mapping_properties_instance.to_dict()
# create an instance of NetworkMappingProperties from a dict
network_mapping_properties_from_dict = NetworkMappingProperties.from_dict(network_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


