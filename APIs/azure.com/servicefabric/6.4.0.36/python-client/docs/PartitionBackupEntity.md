# PartitionBackupEntity

Identifies the Service Fabric stateful partition which is being backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.partition_backup_entity import PartitionBackupEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionBackupEntity from a JSON string
partition_backup_entity_instance = PartitionBackupEntity.from_json(json)
# print the JSON string representation of the object
print(PartitionBackupEntity.to_json())

# convert the object into a dict
partition_backup_entity_dict = partition_backup_entity_instance.to_dict()
# create an instance of PartitionBackupEntity from a dict
partition_backup_entity_from_dict = PartitionBackupEntity.from_dict(partition_backup_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


