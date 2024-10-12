# RemoveProtectionContainerMappingInputProperties

Unpairing input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_input** | [**ReplicationProviderContainerUnmappingInput**](ReplicationProviderContainerUnmappingInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_protection_container_mapping_input_properties import RemoveProtectionContainerMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveProtectionContainerMappingInputProperties from a JSON string
remove_protection_container_mapping_input_properties_instance = RemoveProtectionContainerMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(RemoveProtectionContainerMappingInputProperties.to_json())

# convert the object into a dict
remove_protection_container_mapping_input_properties_dict = remove_protection_container_mapping_input_properties_instance.to_dict()
# create an instance of RemoveProtectionContainerMappingInputProperties from a dict
remove_protection_container_mapping_input_properties_from_dict = RemoveProtectionContainerMappingInputProperties.from_dict(remove_protection_container_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


