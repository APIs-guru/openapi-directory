# StatefulServiceUpdateProperties

The properties of a stateful service resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_replica_set_size** | **int** | The minimum replica set size as a number. | [optional] 
**quorum_loss_wait_duration** | **datetime** | The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**replica_restart_wait_duration** | **datetime** | The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**stand_by_replica_keep_duration** | **datetime** | The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**target_replica_set_size** | **int** | The target replica set size as a number. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_update_properties import StatefulServiceUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceUpdateProperties from a JSON string
stateful_service_update_properties_instance = StatefulServiceUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceUpdateProperties.to_json())

# convert the object into a dict
stateful_service_update_properties_dict = stateful_service_update_properties_instance.to_dict()
# create an instance of StatefulServiceUpdateProperties from a dict
stateful_service_update_properties_from_dict = StatefulServiceUpdateProperties.from_dict(stateful_service_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


