# SecondaryReplicatorStatus

Provides statistics about the Service Fabric Replicator, when it is functioning in a ActiveSecondary role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_queue_status** | [**ReplicatorQueueStatus**](ReplicatorQueueStatus.md) |  | [optional] 
**is_in_build** | **bool** | Value that indicates whether the replica is currently being built. | [optional] 
**last_acknowledgement_sent_time_utc** | **datetime** | The last time-stamp (UTC) at which an acknowledgment was sent to the primary replicator. UTC 0 represents an invalid value, indicating that an acknowledgment message was never sent.  | [optional] 
**last_copy_operation_received_time_utc** | **datetime** | The last time-stamp (UTC) at which a copy operation was received from the primary. UTC 0 represents an invalid value, indicating that a copy operation message was never received.  | [optional] 
**last_replication_operation_received_time_utc** | **datetime** | The last time-stamp (UTC) at which a replication operation was received from the primary. UTC 0 represents an invalid value, indicating that a replication operation message was never received.  | [optional] 
**replication_queue_status** | [**ReplicatorQueueStatus**](ReplicatorQueueStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.secondary_replicator_status import SecondaryReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryReplicatorStatus from a JSON string
secondary_replicator_status_instance = SecondaryReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(SecondaryReplicatorStatus.to_json())

# convert the object into a dict
secondary_replicator_status_dict = secondary_replicator_status_instance.to_dict()
# create an instance of SecondaryReplicatorStatus from a dict
secondary_replicator_status_from_dict = SecondaryReplicatorStatus.from_dict(secondary_replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


