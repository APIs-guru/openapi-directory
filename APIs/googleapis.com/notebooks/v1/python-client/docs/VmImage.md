# VmImage

Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_family** | **str** | Use this VM image family to find the image; the newest image in this family will be used. | [optional] 
**image_name** | **str** | Use VM image name to find the image. | [optional] 
**project** | **str** | Required. The name of the Google Cloud project that this VM image belongs to. Format: &#x60;{project_id}&#x60; | [optional] 

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


