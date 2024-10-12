# FabricReplicationGroupTaskDetails

This class represents the fabric replication group task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_task** | [**JobEntity**](JobEntity.md) |  | [optional] 
**skipped_reason** | **str** | The skipped reason. | [optional] 
**skipped_reason_string** | **str** | The skipped reason string. | [optional] 

## Example

```python
from openapi_client.models.fabric_replication_group_task_details import FabricReplicationGroupTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FabricReplicationGroupTaskDetails from a JSON string
fabric_replication_group_task_details_instance = FabricReplicationGroupTaskDetails.from_json(json)
# print the JSON string representation of the object
print(FabricReplicationGroupTaskDetails.to_json())

# convert the object into a dict
fabric_replication_group_task_details_dict = fabric_replication_group_task_details_instance.to_dict()
# create an instance of FabricReplicationGroupTaskDetails from a dict
fabric_replication_group_task_details_from_dict = FabricReplicationGroupTaskDetails.from_dict(fabric_replication_group_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


