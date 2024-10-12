# VmwareHostConfig

Represents the common parameters for all the hosts irrespective of their IP address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_search_domains** | **List[str]** | DNS search domains. | [optional] 
**dns_servers** | **List[str]** | DNS servers. | [optional] 
**ntp_servers** | **List[str]** | NTP servers. | [optional] 

## Example

```python
from openapi_client.models.vmware_host_config import VmwareHostConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareHostConfig from a JSON string
vmware_host_config_instance = VmwareHostConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareHostConfig.to_json())

# convert the object into a dict
vmware_host_config_dict = vmware_host_config_instance.to_dict()
# create an instance of VmwareHostConfig from a dict
vmware_host_config_from_dict = VmwareHostConfig.from_dict(vmware_host_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


