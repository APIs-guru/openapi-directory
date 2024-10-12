# PatchConfig

Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt** | [**AptSettings**](AptSettings.md) |  | [optional] 
**goo** | **object** | Googet patching is performed by running &#x60;googet update&#x60;. | [optional] 
**mig_instances_allowed** | **bool** | Allows the patch job to run on Managed instance groups (MIGs). | [optional] 
**post_step** | [**ExecStep**](ExecStep.md) |  | [optional] 
**pre_step** | [**ExecStep**](ExecStep.md) |  | [optional] 
**reboot_config** | **str** | Post-patch reboot settings. | [optional] 
**windows_update** | [**WindowsUpdateSettings**](WindowsUpdateSettings.md) |  | [optional] 
**yum** | [**YumSettings**](YumSettings.md) |  | [optional] 
**zypper** | [**ZypperSettings**](ZypperSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_config import PatchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PatchConfig from a JSON string
patch_config_instance = PatchConfig.from_json(json)
# print the JSON string representation of the object
print(PatchConfig.to_json())

# convert the object into a dict
patch_config_dict = patch_config_instance.to_dict()
# create an instance of PatchConfig from a dict
patch_config_from_dict = PatchConfig.from_dict(patch_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


