# ClusterHealth

The health of the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_health_state** | [**List[ClusterHealthApplicationHealthStateInner]**](ClusterHealthApplicationHealthStateInner.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**node_health_states** | [**List[ClusterHealthNodeHealthStatesInner]**](ClusterHealthNodeHealthStatesInner.md) |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


