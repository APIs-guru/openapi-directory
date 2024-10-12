# ImageTemplatePowerShellCustomizer

Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline** | **List[str]** | Array of PowerShell commands to execute | [optional] 
**run_elevated** | **bool** | If specified, the PowerShell script will be run with elevated privileges | [optional] 
**script_uri** | **str** | URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc | [optional] 
**sha256_checksum** | **str** | SHA256 checksum of the power shell script provided in the scriptUri field above | [optional] 
**valid_exit_codes** | **List[int]** | Valid exit codes for the PowerShell script. [Default: 0] | [optional] 

## Example

```python
from openapi_client.models.image_template_power_shell_customizer import ImageTemplatePowerShellCustomizer

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplatePowerShellCustomizer from a JSON string
image_template_power_shell_customizer_instance = ImageTemplatePowerShellCustomizer.from_json(json)
# print the JSON string representation of the object
print(ImageTemplatePowerShellCustomizer.to_json())

# convert the object into a dict
image_template_power_shell_customizer_dict = image_template_power_shell_customizer_instance.to_dict()
# create an instance of ImageTemplatePowerShellCustomizer from a dict
image_template_power_shell_customizer_from_dict = ImageTemplatePowerShellCustomizer.from_dict(image_template_power_shell_customizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


