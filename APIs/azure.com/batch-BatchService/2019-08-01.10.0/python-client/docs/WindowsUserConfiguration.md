# WindowsUserConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_mode** | **str** | The default value for VirtualMachineConfiguration Pools is &#39;batch&#39; and for CloudServiceConfiguration Pools is &#39;interactive&#39;. | [optional] 

## Example

```python
from openapi_client.models.windows_user_configuration import WindowsUserConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsUserConfiguration from a JSON string
windows_user_configuration_instance = WindowsUserConfiguration.from_json(json)
# print the JSON string representation of the object
print(WindowsUserConfiguration.to_json())

# convert the object into a dict
windows_user_configuration_dict = windows_user_configuration_instance.to_dict()
# create an instance of WindowsUserConfiguration from a dict
windows_user_configuration_from_dict = WindowsUserConfiguration.from_dict(windows_user_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


