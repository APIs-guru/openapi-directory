# StatefulServicePartitionInfo

Information about a partition of a stateful Service Fabric service..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_quorum_loss_duration** | **str** | The duration for which this partition was in quorum loss. If the partition is currently in quorum loss, it returns the duration since it has been in that state. This field is using ISO8601 format for specifying the duration. | [optional] 
**min_replica_set_size** | **int** | The minimum replica set size as a number. | [optional] 
**primary_epoch** | [**Epoch**](Epoch.md) |  | [optional] 
**target_replica_set_size** | **int** | The target replica set size as a number. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_partition_info import StatefulServicePartitionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServicePartitionInfo from a JSON string
stateful_service_partition_info_instance = StatefulServicePartitionInfo.from_json(json)
# print the JSON string representation of the object
print(StatefulServicePartitionInfo.to_json())

# convert the object into a dict
stateful_service_partition_info_dict = stateful_service_partition_info_instance.to_dict()
# create an instance of StatefulServicePartitionInfo from a dict
stateful_service_partition_info_from_dict = StatefulServicePartitionInfo.from_dict(stateful_service_partition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


