# AddDisksProviderSpecificInput

Add Disks provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.add_disks_provider_specific_input import AddDisksProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of AddDisksProviderSpecificInput from a JSON string
add_disks_provider_specific_input_instance = AddDisksProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(AddDisksProviderSpecificInput.to_json())

# convert the object into a dict
add_disks_provider_specific_input_dict = add_disks_provider_specific_input_instance.to_dict()
# create an instance of AddDisksProviderSpecificInput from a dict
add_disks_provider_specific_input_from_dict = AddDisksProviderSpecificInput.from_dict(add_disks_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


