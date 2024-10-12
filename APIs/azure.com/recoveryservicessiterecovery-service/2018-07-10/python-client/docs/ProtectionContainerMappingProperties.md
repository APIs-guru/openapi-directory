# ProtectionContainerMappingProperties

Protection container mapping properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health** | **str** | Health of pairing. | [optional] 
**health_error_details** | [**List[HealthError]**](HealthError.md) | Health error. | [optional] 
**policy_friendly_name** | **str** | Friendly name of replication policy. | [optional] 
**policy_id** | **str** | Policy ARM Id. | [optional] 
**provider_specific_details** | [**ProtectionContainerMappingProviderSpecificDetails**](ProtectionContainerMappingProviderSpecificDetails.md) |  | [optional] 
**source_fabric_friendly_name** | **str** | Friendly name of source fabric. | [optional] 
**source_protection_container_friendly_name** | **str** | Friendly name of source protection container. | [optional] 
**state** | **str** | Association Status | [optional] 
**target_fabric_friendly_name** | **str** | Friendly name of target fabric. | [optional] 
**target_protection_container_friendly_name** | **str** | Friendly name of paired container. | [optional] 
**target_protection_container_id** | **str** | Paired protection container ARM ID. | [optional] 

## Example

```python
from openapi_client.models.protection_container_mapping_properties import ProtectionContainerMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerMappingProperties from a JSON string
protection_container_mapping_properties_instance = ProtectionContainerMappingProperties.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerMappingProperties.to_json())

# convert the object into a dict
protection_container_mapping_properties_dict = protection_container_mapping_properties_instance.to_dict()
# create an instance of ProtectionContainerMappingProperties from a dict
protection_container_mapping_properties_from_dict = ProtectionContainerMappingProperties.from_dict(protection_container_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


