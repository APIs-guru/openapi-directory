# VmwareAutoRepairConfig

Specifies config to enable/disable auto repair. The cluster-health-controller is deployed only if Enabled is true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether auto repair is enabled. | [optional] 

## Example

```python
from openapi_client.models.vmware_auto_repair_config import VmwareAutoRepairConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAutoRepairConfig from a JSON string
vmware_auto_repair_config_instance = VmwareAutoRepairConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAutoRepairConfig.to_json())

# convert the object into a dict
vmware_auto_repair_config_dict = vmware_auto_repair_config_instance.to_dict()
# create an instance of VmwareAutoRepairConfig from a dict
vmware_auto_repair_config_from_dict = VmwareAutoRepairConfig.from_dict(vmware_auto_repair_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


