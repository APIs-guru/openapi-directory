# ClusterHealth

Represents the health of the cluster. Contains the cluster aggregated health state, the cluster application and node health states as well as the health events and the unhealthy evaluations. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**application_health_states** | [**List[ApplicationHealthState]**](ApplicationHealthState.md) | Cluster application health states as found in the health store. | [optional] 
**node_health_states** | [**List[NodeHealthState]**](NodeHealthState.md) | Cluster node health states as found in the health store. | [optional] 

## Example

```python
from openapi_client.models.cluster_health import ClusterHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealth from a JSON string
cluster_health_instance = ClusterHealth.from_json(json)
# print the JSON string representation of the object
print(ClusterHealth.to_json())

# convert the object into a dict
cluster_health_dict = cluster_health_instance.to_dict()
# create an instance of ClusterHealth from a dict
cluster_health_from_dict = ClusterHealth.from_dict(cluster_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


