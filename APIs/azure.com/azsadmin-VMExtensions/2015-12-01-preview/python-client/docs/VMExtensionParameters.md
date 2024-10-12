# VMExtensionParameters

Parameters used to create a new Virtual Machine Extension Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VMExtensionProperties**](VMExtensionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.vm_extension_parameters import VMExtensionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VMExtensionParameters from a JSON string
vm_extension_parameters_instance = VMExtensionParameters.from_json(json)
# print the JSON string representation of the object
print(VMExtensionParameters.to_json())

# convert the object into a dict
vm_extension_parameters_dict = vm_extension_parameters_instance.to_dict()
# create an instance of VMExtensionParameters from a dict
vm_extension_parameters_from_dict = VMExtensionParameters.from_dict(vm_extension_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


