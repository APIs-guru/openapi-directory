# NetworkMappingFabricSpecificSettings

Network Mapping fabric specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_mapping_fabric_specific_settings import NetworkMappingFabricSpecificSettings

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkMappingFabricSpecificSettings from a JSON string
network_mapping_fabric_specific_settings_instance = NetworkMappingFabricSpecificSettings.from_json(json)
# print the JSON string representation of the object
print(NetworkMappingFabricSpecificSettings.to_json())

# convert the object into a dict
network_mapping_fabric_specific_settings_dict = network_mapping_fabric_specific_settings_instance.to_dict()
# create an instance of NetworkMappingFabricSpecificSettings from a dict
network_mapping_fabric_specific_settings_from_dict = NetworkMappingFabricSpecificSettings.from_dict(network_mapping_fabric_specific_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


