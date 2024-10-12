# RestorePartitionDescription

Specifies the parameters needed to trigger a restore of a specific partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Unique backup ID. | 
**backup_location** | **str** | Location of the backup relative to the backup storage specified/ configured. | 
**backup_storage** | [**BackupStorageDescription**](BackupStorageDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.restore_partition_description import RestorePartitionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePartitionDescription from a JSON string
restore_partition_description_instance = RestorePartitionDescription.from_json(json)
# print the JSON string representation of the object
print(RestorePartitionDescription.to_json())

# convert the object into a dict
restore_partition_description_dict = restore_partition_description_instance.to_dict()
# create an instance of RestorePartitionDescription from a dict
restore_partition_description_from_dict = RestorePartitionDescription.from_dict(restore_partition_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


