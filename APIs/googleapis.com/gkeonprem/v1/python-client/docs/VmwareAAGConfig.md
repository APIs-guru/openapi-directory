# VmwareAAGConfig

Specifies anti affinity group config for the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aag_config_disabled** | **bool** | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. | [optional] 

## Example

```python
from openapi_client.models.vmware_aag_config import VmwareAAGConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAAGConfig from a JSON string
vmware_aag_config_instance = VmwareAAGConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAAGConfig.to_json())

# convert the object into a dict
vmware_aag_config_dict = vmware_aag_config_instance.to_dict()
# create an instance of VmwareAAGConfig from a dict
vmware_aag_config_from_dict = VmwareAAGConfig.from_dict(vmware_aag_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


