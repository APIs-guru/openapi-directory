# ContainerServiceMasterProfile

Profile for the container service master.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1. | [optional] [default to 1]
**dns_prefix** | **str** | DNS prefix to be used to create the FQDN for the master pool. | 
**first_consecutive_static_ip** | **str** | FirstConsecutiveStaticIP used to specify the first static ip of masters. | [optional] [default to '10.240.255.5']
**fqdn** | **str** | FQDN for the master pool. | [optional] [readonly] 
**os_disk_size_gb** | **int** | OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified. | [optional] 
**storage_profile** | [**ContainerServiceStorageProfile**](ContainerServiceStorageProfile.md) |  | [optional] 
**vm_size** | [**ContainerServiceVMSize**](ContainerServiceVMSize.md) |  | 
**vnet_subnet_id** | **str** | VNet SubnetID specifies the VNet&#39;s subnet identifier. | [optional] 

## Example

```python
from openapi_client.models.container_service_master_profile import ContainerServiceMasterProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceMasterProfile from a JSON string
container_service_master_profile_instance = ContainerServiceMasterProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceMasterProfile.to_json())

# convert the object into a dict
container_service_master_profile_dict = container_service_master_profile_instance.to_dict()
# create an instance of ContainerServiceMasterProfile from a dict
container_service_master_profile_from_dict = ContainerServiceMasterProfile.from_dict(container_service_master_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


