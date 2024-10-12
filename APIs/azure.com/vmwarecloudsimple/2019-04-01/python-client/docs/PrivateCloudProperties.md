# PrivateCloudProperties

Properties of private

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_zone_id** | **str** | Availability Zone id, e.g. \&quot;az1\&quot; | [optional] 
**availability_zone_name** | **str** | Availability Zone name, e.g. \&quot;Availability Zone 1\&quot; | [optional] 
**clusters_number** | **int** | Number of clusters | [optional] 
**created_by** | **str** | User&#39;s emails who created cloud | [optional] 
**created_on** | **datetime** | When private cloud was created | [optional] 
**dns_servers** | **List[str]** | Array of DNS servers | [optional] 
**expires** | **str** | Expiration date of PC | [optional] 
**nsx_type** | **str** | Nsx Type, e.g. \&quot;Advanced\&quot; | [optional] 
**placement_group_id** | **str** | Placement Group id, e.g. \&quot;n1\&quot; | [optional] 
**placement_group_name** | **str** | Placement Group name | [optional] 
**private_cloud_id** | **str** | Id of a private cloud | [optional] 
**resource_pools** | [**List[ResourcePool]**](ResourcePool.md) | The list of Resource Pools | [optional] 
**state** | **str** | Private Cloud state, e.g. \&quot;operational\&quot; | [optional] 
**total_cpu_cores** | **int** | Number of cores | [optional] 
**total_nodes** | **int** | Number of nodes | [optional] 
**total_ram** | **int** | Memory size | [optional] 
**total_storage** | **float** | Disk space in TB | [optional] 
**type** | **str** | Virtualization type e.g. \&quot;vSphere\&quot; | [optional] 
**v_sphere_version** | **str** | e.g. \&quot;6.5u2\&quot; | [optional] 
**vcenter_fqdn** | **str** | FQDN for vcenter access | [optional] 
**vcenter_refid** | **str** | Vcenter ip address | [optional] 
**virtual_machine_templates** | [**List[VirtualMachineTemplate]**](VirtualMachineTemplate.md) | The list of Virtual Machine Templates | [optional] 
**virtual_networks** | [**List[VirtualNetwork]**](VirtualNetwork.md) | The list of Virtual Networks | [optional] 
**vr_ops_enabled** | **bool** | Is Vrops enabled/disabled | [optional] 

## Example

```python
from openapi_client.models.private_cloud_properties import PrivateCloudProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCloudProperties from a JSON string
private_cloud_properties_instance = PrivateCloudProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateCloudProperties.to_json())

# convert the object into a dict
private_cloud_properties_dict = private_cloud_properties_instance.to_dict()
# create an instance of PrivateCloudProperties from a dict
private_cloud_properties_from_dict = PrivateCloudProperties.from_dict(private_cloud_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


