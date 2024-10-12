# StatefulServiceDescription

Describes a stateful service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | **int** | Flags indicating whether other properties are set. Each of the associated properties corresponds to a flag, specified below, which, if set, indicate that the property is specified. This property can be a combination of those flags obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then the flags for QuorumLossWaitDuration (2) and StandByReplicaKeepDuration(4) are set.  - None - Does not indicate any other properties are set. The value is zero. - ReplicaRestartWaitDuration - Indicates the ReplicaRestartWaitDuration property is set. The value is 1. - QuorumLossWaitDuration - Indicates the QuorumLossWaitDuration property is set. The value is 2. - StandByReplicaKeepDuration - Indicates the StandByReplicaKeepDuration property is set. The value is 4. - ServicePlacementTimeLimit - Indicates the ServicePlacementTimeLimit property is set. The value is 8. | [optional] 
**has_persisted_state** | **bool** | A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. | 
**min_replica_set_size** | **int** | The minimum replica set size as a number. | 
**quorum_loss_wait_duration_seconds** | **int** | The maximum duration, in seconds, for which a partition is allowed to be in a state of quorum loss. | [optional] 
**replica_restart_wait_duration_seconds** | **int** | The duration, in seconds, between when a replica goes down and when a new replica is created. | [optional] 
**service_placement_time_limit_seconds** | **int** | The duration for which replicas can stay InBuild before reporting that build is stuck. | [optional] 
**stand_by_replica_keep_duration_seconds** | **int** | The definition on how long StandBy replicas should be maintained before being removed. | [optional] 
**target_replica_set_size** | **int** | The target replica set size as a number. | 

## Example

```python
from openapi_client.models.stateful_service_description import StatefulServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceDescription from a JSON string
stateful_service_description_instance = StatefulServiceDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceDescription.to_json())

# convert the object into a dict
stateful_service_description_dict = stateful_service_description_instance.to_dict()
# create an instance of StatefulServiceDescription from a dict
stateful_service_description_from_dict = StatefulServiceDescription.from_dict(stateful_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


