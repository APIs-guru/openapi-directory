# BackupPartitionDescription

Describes the parameters for triggering partition's backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_storage** | [**BackupStorageDescription**](BackupStorageDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_partition_description import BackupPartitionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPartitionDescription from a JSON string
backup_partition_description_instance = BackupPartitionDescription.from_json(json)
# print the JSON string representation of the object
print(BackupPartitionDescription.to_json())

# convert the object into a dict
backup_partition_description_dict = backup_partition_description_instance.to_dict()
# create an instance of BackupPartitionDescription from a dict
backup_partition_description_from_dict = BackupPartitionDescription.from_dict(backup_partition_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


