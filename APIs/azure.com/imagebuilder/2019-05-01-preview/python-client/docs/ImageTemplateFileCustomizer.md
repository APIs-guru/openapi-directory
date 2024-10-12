# ImageTemplateFileCustomizer

Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM | [optional] 
**sha256_checksum** | **str** | SHA256 checksum of the file provided in the sourceUri field above | [optional] 
**source_uri** | **str** | The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc | [optional] 

## Example

```python
from openapi_client.models.image_template_file_customizer import ImageTemplateFileCustomizer

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateFileCustomizer from a JSON string
image_template_file_customizer_instance = ImageTemplateFileCustomizer.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateFileCustomizer.to_json())

# convert the object into a dict
image_template_file_customizer_dict = image_template_file_customizer_instance.to_dict()
# create an instance of ImageTemplateFileCustomizer from a dict
image_template_file_customizer_from_dict = ImageTemplateFileCustomizer.from_dict(image_template_file_customizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


