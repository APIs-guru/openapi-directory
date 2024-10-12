# VmwareAdminSeesawConfig

VmwareSeesawConfig represents configuration parameters for an already existing Seesaw load balancer. IMPORTANT: Please note that the Anthos On-Prem API will not generate or update Seesaw configurations it can only bind a pre-existing configuration to a new user cluster. IMPORTANT: When attempting to create a user cluster with a pre-existing Seesaw load balancer you will need to follow some preparation steps before calling the 'CreateVmwareCluster' API method. First you will need to create the user cluster's namespace via kubectl. The namespace will need to use the following naming convention : -gke-onprem-mgmt or -gke-onprem-mgmt depending on whether you used the 'VmwareCluster.local_name' to disambiguate collisions; for more context see the documentation of 'VmwareCluster.local_name'. Once the namespace is created you will need to create a secret resource via kubectl. This secret will contain copies of your Seesaw credentials. The Secret must be called 'user-cluster-creds' and contain Seesaw's SSH and Cert credentials. The credentials must be keyed with the following names: 'seesaw-ssh-private-key', 'seesaw-ssh-public-key', 'seesaw-ssh-ca-key', 'seesaw-ssh-ca-cert'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_ha** | **bool** | Enable two load balancer VMs to achieve a highly-available Seesaw load balancer. | [optional] 
**group** | **str** | In general the following format should be used for the Seesaw group name: seesaw-for-[cluster_name]. | [optional] 
**ip_blocks** | [**List[VmwareIpBlock]**](VmwareIpBlock.md) | The IP Blocks to be used by the Seesaw load balancer | [optional] 
**master_ip** | **str** | MasterIP is the IP announced by the master of Seesaw group. | [optional] 
**stackdriver_name** | **str** | Name to be used by Stackdriver. | [optional] 
**vms** | **List[str]** | Names of the VMs created for this Seesaw group. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_seesaw_config import VmwareAdminSeesawConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminSeesawConfig from a JSON string
vmware_admin_seesaw_config_instance = VmwareAdminSeesawConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminSeesawConfig.to_json())

# convert the object into a dict
vmware_admin_seesaw_config_dict = vmware_admin_seesaw_config_instance.to_dict()
# create an instance of VmwareAdminSeesawConfig from a dict
vmware_admin_seesaw_config_from_dict = VmwareAdminSeesawConfig.from_dict(vmware_admin_seesaw_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


