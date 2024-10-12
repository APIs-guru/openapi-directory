# AzurePowerShellScriptProperties

Properties of the Azure PowerShell script object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**az_power_shell_version** | **str** | Azure PowerShell module version to be used. | 
**cleanup_preference** | **str** | The clean up preference when the script execution gets in a terminal state. Default setting is &#39;Always&#39;. | [optional] 
**outputs** | **Dict[str, object]** | List of script outputs. | [optional] [readonly] 
**provisioning_state** | **str** | State of the script execution. This only appears in the response. | [optional] [readonly] 
**status** | [**ScriptStatus**](ScriptStatus.md) |  | [optional] 
**arguments** | **str** | Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location &#39;West US 2&#39;  | [optional] 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | The environment variables to pass over to the script. | [optional] 
**force_update_tag** | **str** | Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. | [optional] 
**primary_script_uri** | **str** | Uri for the script. This is the entry point for the external script. | [optional] 
**retention_interval** | **str** | Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week). | 
**script_content** | **str** | Script body. | [optional] 
**supporting_script_uris** | **List[str]** | Supporting files for the external script. | [optional] 
**timeout** | **str** | Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H | [optional] 

## Example

```python
from openapi_client.models.azure_power_shell_script_properties import AzurePowerShellScriptProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzurePowerShellScriptProperties from a JSON string
azure_power_shell_script_properties_instance = AzurePowerShellScriptProperties.from_json(json)
# print the JSON string representation of the object
print(AzurePowerShellScriptProperties.to_json())

# convert the object into a dict
azure_power_shell_script_properties_dict = azure_power_shell_script_properties_instance.to_dict()
# create an instance of AzurePowerShellScriptProperties from a dict
azure_power_shell_script_properties_from_dict = AzurePowerShellScriptProperties.from_dict(azure_power_shell_script_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


