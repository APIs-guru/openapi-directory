# ImageTemplateRestartCustomizer

Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restart_check_command** | **str** | Command to check if restart succeeded [Default: &#39;&#39;] | [optional] 
**restart_command** | **str** | Command to execute the restart [Default: &#39;shutdown /r /f /t 0 /c \&quot;packer restart\&quot;&#39;] | [optional] 
**restart_timeout** | **str** | Restart timeout specified as a string of magnitude and unit, e.g. &#39;5m&#39; (5 minutes) or &#39;2h&#39; (2 hours) [Default: &#39;5m&#39;] | [optional] 

## Example

```python
from openapi_client.models.image_template_restart_customizer import ImageTemplateRestartCustomizer

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateRestartCustomizer from a JSON string
image_template_restart_customizer_instance = ImageTemplateRestartCustomizer.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateRestartCustomizer.to_json())

# convert the object into a dict
image_template_restart_customizer_dict = image_template_restart_customizer_instance.to_dict()
# create an instance of ImageTemplateRestartCustomizer from a dict
image_template_restart_customizer_from_dict = ImageTemplateRestartCustomizer.from_dict(image_template_restart_customizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


