# WinRMConfiguration

Describes Windows Remote Management configuration of the VM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listeners** | [**List[WinRMListener]**](WinRMListener.md) | The list of Windows Remote Management listeners | [optional] 

## Example

```python
from openapi_client.models.win_rm_configuration import WinRMConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WinRMConfiguration from a JSON string
win_rm_configuration_instance = WinRMConfiguration.from_json(json)
# print the JSON string representation of the object
print(WinRMConfiguration.to_json())

# convert the object into a dict
win_rm_configuration_dict = win_rm_configuration_instance.to_dict()
# create an instance of WinRMConfiguration from a dict
win_rm_configuration_from_dict = WinRMConfiguration.from_dict(win_rm_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


