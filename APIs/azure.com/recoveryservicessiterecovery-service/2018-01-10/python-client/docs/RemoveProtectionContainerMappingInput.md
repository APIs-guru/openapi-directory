# RemoveProtectionContainerMappingInput

Container unpairing input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RemoveProtectionContainerMappingInputProperties**](RemoveProtectionContainerMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_protection_container_mapping_input import RemoveProtectionContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveProtectionContainerMappingInput from a JSON string
remove_protection_container_mapping_input_instance = RemoveProtectionContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(RemoveProtectionContainerMappingInput.to_json())

# convert the object into a dict
remove_protection_container_mapping_input_dict = remove_protection_container_mapping_input_instance.to_dict()
# create an instance of RemoveProtectionContainerMappingInput from a dict
remove_protection_container_mapping_input_from_dict = RemoveProtectionContainerMappingInput.from_dict(remove_protection_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


