# VmImage

The virtual machine image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name. | 
**offer** | **str** | The offer. | 
**publisher** | **str** | The publisher. | 
**sku** | **str** | The SKU. | 
**version** | **str** | The version. | 

## Example

```python
from openapi_client.models.vm_image import VmImage

# TODO update the JSON string below
json = "{}"
# create an instance of VmImage from a JSON string
vm_image_instance = VmImage.from_json(json)
# print the JSON string representation of the object
print(VmImage.to_json())

# convert the object into a dict
vm_image_dict = vm_image_instance.to_dict()
# create an instance of VmImage from a dict
vm_image_from_dict = VmImage.from_dict(vm_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


