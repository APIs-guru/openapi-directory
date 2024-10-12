# VmwareIpBlock

Represents a collection of IP addresses to assign to nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | **str** | The network gateway used by the VMware user cluster. | [optional] 
**ips** | [**List[VmwareHostIp]**](VmwareHostIp.md) | The node&#39;s network configurations used by the VMware user cluster. | [optional] 
**netmask** | **str** | The netmask used by the VMware user cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_ip_block import VmwareIpBlock

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareIpBlock from a JSON string
vmware_ip_block_instance = VmwareIpBlock.from_json(json)
# print the JSON string representation of the object
print(VmwareIpBlock.to_json())

# convert the object into a dict
vmware_ip_block_dict = vmware_ip_block_instance.to_dict()
# create an instance of VmwareIpBlock from a dict
vmware_ip_block_from_dict = VmwareIpBlock.from_dict(vmware_ip_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


