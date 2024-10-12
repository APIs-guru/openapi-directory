# StatefulServiceUpdateDescription

Describes an update for a stateful service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_replica_set_size** | **int** | The minimum replica set size as a number. | [optional] 
**quorum_loss_wait_duration_seconds** | **str** | The maximum duration, in seconds, for which a partition is allowed to be in a state of quorum loss. | [optional] 
**replica_restart_wait_duration_seconds** | **str** | The duration, in seconds, between when a replica goes down and when a new replica is created. | [optional] 
**stand_by_replica_keep_duration_seconds** | **str** | The definition on how long StandBy replicas should be maintained before being removed. | [optional] 
**target_replica_set_size** | **int** | The target replica set size as a number. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_update_description import StatefulServiceUpdateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceUpdateDescription from a JSON string
stateful_service_update_description_instance = StatefulServiceUpdateDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceUpdateDescription.to_json())

# convert the object into a dict
stateful_service_update_description_dict = stateful_service_update_description_instance.to_dict()
# create an instance of StatefulServiceUpdateDescription from a dict
stateful_service_update_description_from_dict = StatefulServiceUpdateDescription.from_dict(stateful_service_update_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


