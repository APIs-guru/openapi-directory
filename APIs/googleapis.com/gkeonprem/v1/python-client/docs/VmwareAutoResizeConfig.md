# VmwareAutoResizeConfig

Represents auto resizing configurations for the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable controle plane node auto resizing. | [optional] 

## Example

```python
from openapi_client.models.vmware_auto_resize_config import VmwareAutoResizeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAutoResizeConfig from a JSON string
vmware_auto_resize_config_instance = VmwareAutoResizeConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAutoResizeConfig.to_json())

# convert the object into a dict
vmware_auto_resize_config_dict = vmware_auto_resize_config_instance.to_dict()
# create an instance of VmwareAutoResizeConfig from a dict
vmware_auto_resize_config_from_dict = VmwareAutoResizeConfig.from_dict(vmware_auto_resize_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


