# SandboxConfig

SandboxConfig contains configurations of the sandbox to use for the node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sandbox_type** | **str** | Type of the sandbox to use for the node (e.g. &#39;gvisor&#39;) | [optional] 
**type** | **str** | Type of the sandbox to use for the node. | [optional] 

## Example

```python
from openapi_client.models.sandbox_config import SandboxConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxConfig from a JSON string
sandbox_config_instance = SandboxConfig.from_json(json)
# print the JSON string representation of the object
print(SandboxConfig.to_json())

# convert the object into a dict
sandbox_config_dict = sandbox_config_instance.to_dict()
# create an instance of SandboxConfig from a dict
sandbox_config_from_dict = SandboxConfig.from_dict(sandbox_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


