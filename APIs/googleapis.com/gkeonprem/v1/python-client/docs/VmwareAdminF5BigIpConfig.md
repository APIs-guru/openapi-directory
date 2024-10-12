# VmwareAdminF5BigIpConfig

VmwareAdminF5BigIpConfig represents configuration parameters for an F5 BIG-IP load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The load balancer&#39;s IP address. | [optional] 
**partition** | **str** | The preexisting partition to be used by the load balancer. This partition is usually created for the admin cluster for example: &#39;my-f5-admin-partition&#39;. | [optional] 
**snat_pool** | **str** | The pool name. Only necessary, if using SNAT. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_f5_big_ip_config import VmwareAdminF5BigIpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminF5BigIpConfig from a JSON string
vmware_admin_f5_big_ip_config_instance = VmwareAdminF5BigIpConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminF5BigIpConfig.to_json())

# convert the object into a dict
vmware_admin_f5_big_ip_config_dict = vmware_admin_f5_big_ip_config_instance.to_dict()
# create an instance of VmwareAdminF5BigIpConfig from a dict
vmware_admin_f5_big_ip_config_from_dict = VmwareAdminF5BigIpConfig.from_dict(vmware_admin_f5_big_ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


