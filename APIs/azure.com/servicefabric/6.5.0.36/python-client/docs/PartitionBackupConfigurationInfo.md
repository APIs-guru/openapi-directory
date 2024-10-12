# PartitionBackupConfigurationInfo

Backup configuration information, for a specific partition, specifying what backup policy is being applied and suspend description, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.partition_backup_configuration_info import PartitionBackupConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionBackupConfigurationInfo from a JSON string
partition_backup_configuration_info_instance = PartitionBackupConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(PartitionBackupConfigurationInfo.to_json())

# convert the object into a dict
partition_backup_configuration_info_dict = partition_backup_configuration_info_instance.to_dict()
# create an instance of PartitionBackupConfigurationInfo from a dict
partition_backup_configuration_info_from_dict = PartitionBackupConfigurationInfo.from_dict(partition_backup_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


