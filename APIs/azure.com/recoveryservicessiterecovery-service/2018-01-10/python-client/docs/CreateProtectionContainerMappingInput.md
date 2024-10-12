# CreateProtectionContainerMappingInput

Configure pairing input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateProtectionContainerMappingInputProperties**](CreateProtectionContainerMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_protection_container_mapping_input import CreateProtectionContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProtectionContainerMappingInput from a JSON string
create_protection_container_mapping_input_instance = CreateProtectionContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(CreateProtectionContainerMappingInput.to_json())

# convert the object into a dict
create_protection_container_mapping_input_dict = create_protection_container_mapping_input_instance.to_dict()
# create an instance of CreateProtectionContainerMappingInput from a dict
create_protection_container_mapping_input_from_dict = CreateProtectionContainerMappingInput.from_dict(create_protection_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


