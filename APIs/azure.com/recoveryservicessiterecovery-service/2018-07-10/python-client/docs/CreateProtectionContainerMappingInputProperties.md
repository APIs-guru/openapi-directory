# CreateProtectionContainerMappingInputProperties

Configure pairing input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | Applicable policy. | [optional] 
**provider_specific_input** | [**ReplicationProviderSpecificContainerMappingInput**](ReplicationProviderSpecificContainerMappingInput.md) |  | [optional] 
**target_protection_container_id** | **str** | The target unique protection container name. | [optional] 

## Example

```python
from openapi_client.models.create_protection_container_mapping_input_properties import CreateProtectionContainerMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProtectionContainerMappingInputProperties from a JSON string
create_protection_container_mapping_input_properties_instance = CreateProtectionContainerMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(CreateProtectionContainerMappingInputProperties.to_json())

# convert the object into a dict
create_protection_container_mapping_input_properties_dict = create_protection_container_mapping_input_properties_instance.to_dict()
# create an instance of CreateProtectionContainerMappingInputProperties from a dict
create_protection_container_mapping_input_properties_from_dict = CreateProtectionContainerMappingInputProperties.from_dict(create_protection_container_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


