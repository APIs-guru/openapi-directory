# UpdateProtectionContainerMappingInput

Container pairing update input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateProtectionContainerMappingInputProperties**](UpdateProtectionContainerMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_protection_container_mapping_input import UpdateProtectionContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProtectionContainerMappingInput from a JSON string
update_protection_container_mapping_input_instance = UpdateProtectionContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(UpdateProtectionContainerMappingInput.to_json())

# convert the object into a dict
update_protection_container_mapping_input_dict = update_protection_container_mapping_input_instance.to_dict()
# create an instance of UpdateProtectionContainerMappingInput from a dict
update_protection_container_mapping_input_from_dict = UpdateProtectionContainerMappingInput.from_dict(update_protection_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


