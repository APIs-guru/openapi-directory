# VMExtension

Virtual Machine Extension Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VMExtensionProperties**](VMExtensionProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_extension import VMExtension

# TODO update the JSON string below
json = "{}"
# create an instance of VMExtension from a JSON string
vm_extension_instance = VMExtension.from_json(json)
# print the JSON string representation of the object
print(VMExtension.to_json())

# convert the object into a dict
vm_extension_dict = vm_extension_instance.to_dict()
# create an instance of VMExtension from a dict
vm_extension_from_dict = VMExtension.from_dict(vm_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


