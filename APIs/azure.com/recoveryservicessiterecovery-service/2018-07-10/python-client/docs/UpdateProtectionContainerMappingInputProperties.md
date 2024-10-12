# UpdateProtectionContainerMappingInputProperties

Container pairing update input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_input** | [**ReplicationProviderSpecificUpdateContainerMappingInput**](ReplicationProviderSpecificUpdateContainerMappingInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_protection_container_mapping_input_properties import UpdateProtectionContainerMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProtectionContainerMappingInputProperties from a JSON string
update_protection_container_mapping_input_properties_instance = UpdateProtectionContainerMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateProtectionContainerMappingInputProperties.to_json())

# convert the object into a dict
update_protection_container_mapping_input_properties_dict = update_protection_container_mapping_input_properties_instance.to_dict()
# create an instance of UpdateProtectionContainerMappingInputProperties from a dict
update_protection_container_mapping_input_properties_from_dict = UpdateProtectionContainerMappingInputProperties.from_dict(update_protection_container_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


