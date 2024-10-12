# ChaosStartedEvent

Chaos Started event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_context** | **str** | Chaos Context. | 
**cluster_health_policy** | **str** | Health policy. | 
**included_application_list** | **str** | List of included Applications. | 
**included_node_type_list** | **str** | List of included Node types. | 
**max_cluster_stabilization_timeout_in_seconds** | **float** | Maximum timeout for cluster stabilization in seconds. | 
**max_concurrent_faults** | **int** | Maximum number of concurrent faults. | 
**move_replica_fault_enabled** | **bool** | Indicates MoveReplica fault is enabled. | 
**time_to_run_in_seconds** | **float** | Time to run in seconds. | 
**wait_time_between_faults_in_seconds** | **float** | Wait time between faults in seconds. | 
**wait_time_between_iterations_in_seconds** | **float** | Wait time between iterations in seconds. | 

## Example

```python
from openapi_client.models.chaos_started_event import ChaosStartedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosStartedEvent from a JSON string
chaos_started_event_instance = ChaosStartedEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosStartedEvent.to_json())

# convert the object into a dict
chaos_started_event_dict = chaos_started_event_instance.to_dict()
# create an instance of ChaosStartedEvent from a dict
chaos_started_event_from_dict = ChaosStartedEvent.from_dict(chaos_started_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


