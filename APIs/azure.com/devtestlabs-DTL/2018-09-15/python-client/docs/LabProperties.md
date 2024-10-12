# LabProperties

Properties of a lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcement** | [**LabAnnouncementProperties**](LabAnnouncementProperties.md) |  | [optional] 
**artifacts_storage_account** | **str** | The lab&#39;s artifact storage account. | [optional] [readonly] 
**created_date** | **datetime** | The creation date of the lab. | [optional] [readonly] 
**default_premium_storage_account** | **str** | The lab&#39;s default premium storage account. | [optional] [readonly] 
**default_storage_account** | **str** | The lab&#39;s default storage account. | [optional] [readonly] 
**environment_permission** | **str** | The access rights to be granted to the user when provisioning an environment | [optional] 
**extended_properties** | **Dict[str, str]** | Extended properties of the lab used for experimental features | [optional] 
**lab_storage_type** | **str** | Type of storage used by the lab. It can be either Premium or Standard. Default is Premium. | [optional] 
**load_balancer_id** | **str** | The load balancer used to for lab VMs that use shared IP address. | [optional] [readonly] 
**mandatory_artifacts_resource_ids_linux** | **List[str]** | The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user. | [optional] 
**mandatory_artifacts_resource_ids_windows** | **List[str]** | The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user. | [optional] 
**network_security_group_id** | **str** | The Network Security Group attached to the lab VMs Network interfaces to restrict open ports. | [optional] [readonly] 
**premium_data_disk_storage_account** | **str** | The lab&#39;s premium data disk storage account. | [optional] [readonly] 
**premium_data_disks** | **str** | The setting to enable usage of premium data disks.  When its value is &#39;Enabled&#39;, creation of standard or premium data disks is allowed.  When its value is &#39;Disabled&#39;, only creation of standard data disks is allowed. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**public_ip_id** | **str** | The public IP address for the lab&#39;s load balancer. | [optional] [readonly] 
**support** | [**LabSupportProperties**](LabSupportProperties.md) |  | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 
**vault_name** | **str** | The lab&#39;s Key vault. | [optional] [readonly] 
**vm_creation_resource_group** | **str** | The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_properties import LabProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabProperties from a JSON string
lab_properties_instance = LabProperties.from_json(json)
# print the JSON string representation of the object
print(LabProperties.to_json())

# convert the object into a dict
lab_properties_dict = lab_properties_instance.to_dict()
# create an instance of LabProperties from a dict
lab_properties_from_dict = LabProperties.from_dict(lab_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


