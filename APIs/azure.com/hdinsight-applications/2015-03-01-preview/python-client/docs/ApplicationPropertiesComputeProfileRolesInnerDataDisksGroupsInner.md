# ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner

The data disks groups for the role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **int** | ReadOnly. The DiskSize in GB. Do not set this value. | [optional] [readonly] 
**disks_per_node** | **int** | The number of disks per node. | [optional] 
**storage_account_type** | **str** | ReadOnly. The storage account type. Do not set this value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_data_disks_groups_inner import ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner from a JSON string
application_properties_compute_profile_roles_inner_data_disks_groups_inner_instance = ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_data_disks_groups_inner_dict = application_properties_compute_profile_roles_inner_data_disks_groups_inner_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner from a dict
application_properties_compute_profile_roles_inner_data_disks_groups_inner_from_dict = ApplicationPropertiesComputeProfileRolesInnerDataDisksGroupsInner.from_dict(application_properties_compute_profile_roles_inner_data_disks_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


