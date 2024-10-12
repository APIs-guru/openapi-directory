# ProtectionContainerMapping

Protection container mapping object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectionContainerMappingProperties**](ProtectionContainerMappingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.protection_container_mapping import ProtectionContainerMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerMapping from a JSON string
protection_container_mapping_instance = ProtectionContainerMapping.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerMapping.to_json())

# convert the object into a dict
protection_container_mapping_dict = protection_container_mapping_instance.to_dict()
# create an instance of ProtectionContainerMapping from a dict
protection_container_mapping_from_dict = ProtectionContainerMapping.from_dict(protection_container_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


