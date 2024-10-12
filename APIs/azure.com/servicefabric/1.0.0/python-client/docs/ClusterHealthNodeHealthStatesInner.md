# ClusterHealthNodeHealthStatesInner

The states of tehe node health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | [**ClusterHealthNodeHealthStatesInnerId**](ClusterHealthNodeHealthStatesInnerId.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_node_health_states_inner import ClusterHealthNodeHealthStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthNodeHealthStatesInner from a JSON string
cluster_health_node_health_states_inner_instance = ClusterHealthNodeHealthStatesInner.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthNodeHealthStatesInner.to_json())

# convert the object into a dict
cluster_health_node_health_states_inner_dict = cluster_health_node_health_states_inner_instance.to_dict()
# create an instance of ClusterHealthNodeHealthStatesInner from a dict
cluster_health_node_health_states_inner_from_dict = ClusterHealthNodeHealthStatesInner.from_dict(cluster_health_node_health_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


