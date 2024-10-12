# WindowsNodeConfig

Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_version** | **str** | OSVersion specifies the Windows node config to be used on the node | [optional] 

## Example

```python
from openapi_client.models.windows_node_config import WindowsNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsNodeConfig from a JSON string
windows_node_config_instance = WindowsNodeConfig.from_json(json)
# print the JSON string representation of the object
print(WindowsNodeConfig.to_json())

# convert the object into a dict
windows_node_config_dict = windows_node_config_instance.to_dict()
# create an instance of WindowsNodeConfig from a dict
windows_node_config_from_dict = WindowsNodeConfig.from_dict(windows_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


