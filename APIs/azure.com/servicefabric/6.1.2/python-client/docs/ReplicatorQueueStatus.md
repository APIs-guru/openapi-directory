# ReplicatorQueueStatus

Provides various statistics of the queue used in the service fabric replicator. Contains information about the service fabric replicator like the replication/copy queue utilization, last acknowledgement received timestamp, etc. Depending on the role of the replicator, the properties in this type imply different meanings. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**committed_sequence_number** | **str** | On a primary replicator, this is semantically the highest sequence number of the operation for which a write quorum of the secondary replicas have sent an acknowledgement. On a secondary replicator, this is semantically the highest sequence number of the in-order operation received from the primary.  | [optional] 
**completed_sequence_number** | **str** | On a primary replicator, this is semantically the highest sequence number of the operation for which all the secondary replicas have sent an acknowledgement. On a secondary replicator, this is semantically the highest sequence number that has been applied to the persistent state.  | [optional] 
**first_sequence_number** | **str** | On a primary replicator, this is semantically the sequence number of the operation for which all the secondary replicas have sent an acknowledgement. On a secondary replicator, this is the smallest sequence number of the operation that is present in the queue.  | [optional] 
**last_sequence_number** | **str** | Represents the latest sequence number of the operation that is available in the queue. | [optional] 
**queue_memory_size** | **str** | Represents the virtual memory consumed by the queue in bytes. | [optional] 
**queue_utilization_percentage** | **int** | Represents the utilization of the queue. A value of 0 indicates that the queue is empty and a value of 100 indicates the queue is full. | [optional] 

## Example

```python
from openapi_client.models.replicator_queue_status import ReplicatorQueueStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicatorQueueStatus from a JSON string
replicator_queue_status_instance = ReplicatorQueueStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicatorQueueStatus.to_json())

# convert the object into a dict
replicator_queue_status_dict = replicator_queue_status_instance.to_dict()
# create an instance of ReplicatorQueueStatus from a dict
replicator_queue_status_from_dict = ReplicatorQueueStatus.from_dict(replicator_queue_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


