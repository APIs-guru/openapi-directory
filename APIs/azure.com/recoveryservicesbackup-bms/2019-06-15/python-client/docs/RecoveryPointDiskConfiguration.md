# RecoveryPointDiskConfiguration

Disk configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_disk_list** | [**List[DiskInformation]**](DiskInformation.md) | Information of disks excluded from backup | [optional] 
**included_disk_list** | [**List[DiskInformation]**](DiskInformation.md) | Information of disks included in backup | [optional] 
**number_of_disks_attached_to_vm** | **int** | Number of disks attached to the VM | [optional] 
**number_of_disks_included_in_backup** | **int** | Number of disks included in backup | [optional] 

## Example

```python
from openapi_client.models.recovery_point_disk_configuration import RecoveryPointDiskConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPointDiskConfiguration from a JSON string
recovery_point_disk_configuration_instance = RecoveryPointDiskConfiguration.from_json(json)
# print the JSON string representation of the object
print(RecoveryPointDiskConfiguration.to_json())

# convert the object into a dict
recovery_point_disk_configuration_dict = recovery_point_disk_configuration_instance.to_dict()
# create an instance of RecoveryPointDiskConfiguration from a dict
recovery_point_disk_configuration_from_dict = RecoveryPointDiskConfiguration.from_dict(recovery_point_disk_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


