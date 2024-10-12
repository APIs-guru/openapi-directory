# ImageTemplateShellCustomizer

Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline** | **List[str]** | Array of shell commands to execute | [optional] 
**script_uri** | **str** | URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc | [optional] 
**sha256_checksum** | **str** | SHA256 checksum of the shell script provided in the scriptUri field | [optional] 

## Example

```python
from openapi_client.models.image_template_shell_customizer import ImageTemplateShellCustomizer

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateShellCustomizer from a JSON string
image_template_shell_customizer_instance = ImageTemplateShellCustomizer.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateShellCustomizer.to_json())

# convert the object into a dict
image_template_shell_customizer_dict = image_template_shell_customizer_instance.to_dict()
# create an instance of ImageTemplateShellCustomizer from a dict
image_template_shell_customizer_from_dict = ImageTemplateShellCustomizer.from_dict(image_template_shell_customizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


