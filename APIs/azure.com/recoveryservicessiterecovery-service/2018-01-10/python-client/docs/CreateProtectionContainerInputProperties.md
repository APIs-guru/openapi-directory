# CreateProtectionContainerInputProperties

Create protection container input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_specific_input** | [**List[ReplicationProviderSpecificContainerCreationInput]**](ReplicationProviderSpecificContainerCreationInput.md) | Provider specific inputs for container creation. | [optional] 

## Example

```python
from openapi_client.models.create_protection_container_input_properties import CreateProtectionContainerInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProtectionContainerInputProperties from a JSON string
create_protection_container_input_properties_instance = CreateProtectionContainerInputProperties.from_json(json)
# print the JSON string representation of the object
print(CreateProtectionContainerInputProperties.to_json())

# convert the object into a dict
create_protection_container_input_properties_dict = create_protection_container_input_properties_instance.to_dict()
# create an instance of CreateProtectionContainerInputProperties from a dict
create_protection_container_input_properties_from_dict = CreateProtectionContainerInputProperties.from_dict(create_protection_container_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


