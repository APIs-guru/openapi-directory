# PrimaryReplicatorStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_replicators** | [**List[RemoteReplicatorStatus]**](RemoteReplicatorStatus.md) | List of remote replicator status | [optional] 
**replication_queue_status** | [**ReplicatorQueueStatus**](ReplicatorQueueStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.primary_replicator_status import PrimaryReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryReplicatorStatus from a JSON string
primary_replicator_status_instance = PrimaryReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(PrimaryReplicatorStatus.to_json())

# convert the object into a dict
primary_replicator_status_dict = primary_replicator_status_instance.to_dict()
# create an instance of PrimaryReplicatorStatus from a dict
primary_replicator_status_from_dict = PrimaryReplicatorStatus.from_dict(primary_replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


