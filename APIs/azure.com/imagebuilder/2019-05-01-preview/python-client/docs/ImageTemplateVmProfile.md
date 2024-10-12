# ImageTemplateVmProfile

Describes the virtual machine used to build, customize and capture images

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_size** | **str** | Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2). | [optional] 

## Example

```python
from openapi_client.models.image_template_vm_profile import ImageTemplateVmProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateVmProfile from a JSON string
image_template_vm_profile_instance = ImageTemplateVmProfile.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateVmProfile.to_json())

# convert the object into a dict
image_template_vm_profile_dict = image_template_vm_profile_instance.to_dict()
# create an instance of ImageTemplateVmProfile from a dict
image_template_vm_profile_from_dict = ImageTemplateVmProfile.from_dict(image_template_vm_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


