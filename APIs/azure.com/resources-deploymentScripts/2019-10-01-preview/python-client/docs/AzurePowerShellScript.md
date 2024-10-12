# AzurePowerShellScript

Object model for the Azure PowerShell script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzurePowerShellScriptProperties**](AzurePowerShellScriptProperties.md) |  | 
**identity** | [**ManagedServiceIdentity**](ManagedServiceIdentity.md) |  | 
**kind** | **str** | Type of the script. | 
**location** | **str** | The location of the ACI and the storage account for the deployment script. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_power_shell_script import AzurePowerShellScript

# TODO update the JSON string below
json = "{}"
# create an instance of AzurePowerShellScript from a JSON string
azure_power_shell_script_instance = AzurePowerShellScript.from_json(json)
# print the JSON string representation of the object
print(AzurePowerShellScript.to_json())

# convert the object into a dict
azure_power_shell_script_dict = azure_power_shell_script_instance.to_dict()
# create an instance of AzurePowerShellScript from a dict
azure_power_shell_script_from_dict = AzurePowerShellScript.from_dict(azure_power_shell_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


