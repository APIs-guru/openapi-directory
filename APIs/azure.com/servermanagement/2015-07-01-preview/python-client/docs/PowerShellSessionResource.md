# PowerShellSessionResource

A PowerShell session resource (practically equivalent to a runspace instance).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_shell_session_resource import PowerShellSessionResource

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellSessionResource from a JSON string
power_shell_session_resource_instance = PowerShellSessionResource.from_json(json)
# print the JSON string representation of the object
print(PowerShellSessionResource.to_json())

# convert the object into a dict
power_shell_session_resource_dict = power_shell_session_resource_instance.to_dict()
# create an instance of PowerShellSessionResource from a dict
power_shell_session_resource_from_dict = PowerShellSessionResource.from_dict(power_shell_session_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


