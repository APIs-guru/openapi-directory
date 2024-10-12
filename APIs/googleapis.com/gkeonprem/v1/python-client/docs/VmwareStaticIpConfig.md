# VmwareStaticIpConfig

Represents the network configuration required for the VMware user clusters with Static IP configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_blocks** | [**List[VmwareIpBlock]**](VmwareIpBlock.md) | Represents the configuration values for static IP allocation to nodes. | [optional] 

## Example

```python
from openapi_client.models.vmware_static_ip_config import VmwareStaticIpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareStaticIpConfig from a JSON string
vmware_static_ip_config_instance = VmwareStaticIpConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareStaticIpConfig.to_json())

# convert the object into a dict
vmware_static_ip_config_dict = vmware_static_ip_config_instance.to_dict()
# create an instance of VmwareStaticIpConfig from a dict
vmware_static_ip_config_from_dict = VmwareStaticIpConfig.from_dict(vmware_static_ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


