# PowerShellSessionResources

A collection of PowerShell session resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[PowerShellSessionResource]**](PowerShellSessionResource.md) | Collection of PowerShell session resources. | [optional] 

## Example

```python
from openapi_client.models.power_shell_session_resources import PowerShellSessionResources

# TODO update the JSON string below
json = "{}"
# create an instance of PowerShellSessionResources from a JSON string
power_shell_session_resources_instance = PowerShellSessionResources.from_json(json)
# print the JSON string representation of the object
print(PowerShellSessionResources.to_json())

# convert the object into a dict
power_shell_session_resources_dict = power_shell_session_resources_instance.to_dict()
# create an instance of PowerShellSessionResources from a dict
power_shell_session_resources_from_dict = PowerShellSessionResources.from_dict(power_shell_session_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


