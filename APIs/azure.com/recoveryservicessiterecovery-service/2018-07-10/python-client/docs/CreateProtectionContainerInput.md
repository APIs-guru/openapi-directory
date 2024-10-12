# CreateProtectionContainerInput

Create protection container input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateProtectionContainerInputProperties**](CreateProtectionContainerInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_protection_container_input import CreateProtectionContainerInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProtectionContainerInput from a JSON string
create_protection_container_input_instance = CreateProtectionContainerInput.from_json(json)
# print the JSON string representation of the object
print(CreateProtectionContainerInput.to_json())

# convert the object into a dict
create_protection_container_input_dict = create_protection_container_input_instance.to_dict()
# create an instance of CreateProtectionContainerInput from a dict
create_protection_container_input_from_dict = CreateProtectionContainerInput.from_dict(create_protection_container_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


