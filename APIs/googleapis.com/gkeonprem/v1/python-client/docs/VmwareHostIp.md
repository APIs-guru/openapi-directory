# VmwareHostIp

Represents VMware user cluster node's network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** | Hostname of the machine. VM&#39;s name will be used if this field is empty. | [optional] 
**ip** | **str** | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). | [optional] 

## Example

```python
from openapi_client.models.vmware_host_ip import VmwareHostIp

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareHostIp from a JSON string
vmware_host_ip_instance = VmwareHostIp.from_json(json)
# print the JSON string representation of the object
print(VmwareHostIp.to_json())

# convert the object into a dict
vmware_host_ip_dict = vmware_host_ip_instance.to_dict()
# create an instance of VmwareHostIp from a dict
vmware_host_ip_from_dict = VmwareHostIp.from_dict(vmware_host_ip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


