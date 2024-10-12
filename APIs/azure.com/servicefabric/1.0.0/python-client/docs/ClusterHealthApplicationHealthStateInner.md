# ClusterHealthApplicationHealthStateInner

The state of the application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_application_health_state_inner import ClusterHealthApplicationHealthStateInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthApplicationHealthStateInner from a JSON string
cluster_health_application_health_state_inner_instance = ClusterHealthApplicationHealthStateInner.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthApplicationHealthStateInner.to_json())

# convert the object into a dict
cluster_health_application_health_state_inner_dict = cluster_health_application_health_state_inner_instance.to_dict()
# create an instance of ClusterHealthApplicationHealthStateInner from a dict
cluster_health_application_health_state_inner_from_dict = ClusterHealthApplicationHealthStateInner.from_dict(cluster_health_application_health_state_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


