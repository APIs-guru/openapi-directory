# ChaosParameters

Defines all the parameters to configure a Chaos run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_target_filter** | [**ChaosTargetFilter**](ChaosTargetFilter.md) |  | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**context** | [**ChaosContext**](ChaosContext.md) |  | [optional] 
**enable_move_replica_faults** | **bool** | Enables or disables the move primary and move secondary faults. | [optional] [default to True]
**max_cluster_stabilization_timeout_in_seconds** | **int** | The maximum amount of time to wait for all cluster entities to become stable and healthy. Chaos executes in iterations and at the start of each iteration it validates the health of cluster entities. During validation if a cluster entity is not stable and healthy within MaxClusterStabilizationTimeoutInSeconds, Chaos generates a validation failed event. | [optional] [default to 60]
**max_concurrent_faults** | **int** | MaxConcurrentFaults is the maximum number of concurrent faults induced per iteration. Chaos executes in iterations and two consecutive iterations are separated by a validation phase. The higher the concurrency, the more aggressive the injection of faults -- inducing more complex series of states to uncover bugs. The recommendation is to start with a value of 2 or 3 and to exercise caution while moving up. | [optional] [default to 1]
**time_to_run_in_seconds** | **str** | Total time (in seconds) for which Chaos will run before automatically stopping. The maximum allowed value is 4,294,967,295 (System.UInt32.MaxValue). | [optional] [default to '4294967295']
**wait_time_between_faults_in_seconds** | **int** | Wait time (in seconds) between consecutive faults within a single iteration. The larger the value, the lower the overlapping between faults and the simpler the sequence of state transitions that the cluster goes through. The recommendation is to start with a value between 1 and 5 and exercise caution while moving up. | [optional] [default to 20]
**wait_time_between_iterations_in_seconds** | **int** | Time-separation (in seconds) between two consecutive iterations of Chaos. The larger the value, the lower the fault injection rate. | [optional] [default to 30]

## Example

```python
from openapi_client.models.chaos_parameters import ChaosParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosParameters from a JSON string
chaos_parameters_instance = ChaosParameters.from_json(json)
# print the JSON string representation of the object
print(ChaosParameters.to_json())

# convert the object into a dict
chaos_parameters_dict = chaos_parameters_instance.to_dict()
# create an instance of ChaosParameters from a dict
chaos_parameters_from_dict = ChaosParameters.from_dict(chaos_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


