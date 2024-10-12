# RemoveDisksProviderSpecificInput

Remove Disk provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.remove_disks_provider_specific_input import RemoveDisksProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDisksProviderSpecificInput from a JSON string
remove_disks_provider_specific_input_instance = RemoveDisksProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(RemoveDisksProviderSpecificInput.to_json())

# convert the object into a dict
remove_disks_provider_specific_input_dict = remove_disks_provider_specific_input_instance.to_dict()
# create an instance of RemoveDisksProviderSpecificInput from a dict
remove_disks_provider_specific_input_from_dict = RemoveDisksProviderSpecificInput.from_dict(remove_disks_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


