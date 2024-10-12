# PowerShellCommandStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PowerShellCommandResults**](PowerShellCommandResults.md) |  | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_shell_command_status import PowerShellCommandStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellCommandStatus from a JSON string
power_shell_command_status_instance = PowerShellCommandStatus.from_json(json)
# print the JSON string representation of the object
print(PowerShellCommandStatus.to_json())

# convert the object into a dict
power_shell_command_status_dict = power_shell_command_status_instance.to_dict()
# create an instance of PowerShellCommandStatus from a dict
power_shell_command_status_from_dict = PowerShellCommandStatus.from_dict(power_shell_command_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


