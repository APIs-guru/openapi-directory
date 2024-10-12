# StatefulServiceProperties

The properties of a stateful service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_persisted_state** | **bool** | A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. | [optional] 
**min_replica_set_size** | **int** | The minimum replica set size as a number. | [optional] 
**quorum_loss_wait_duration** | **datetime** | The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**replica_restart_wait_duration** | **datetime** | The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**stand_by_replica_keep_duration** | **datetime** | The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). | [optional] 
**target_replica_set_size** | **int** | The target replica set size as a number. | [optional] 
**partition_description** | [**PartitionSchemeDescription**](PartitionSchemeDescription.md) |  | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response | [optional] [readonly] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_type_name** | **str** | The name of the service type | [optional] 
**correlation_scheme** | [**List[ServiceCorrelationDescription]**](ServiceCorrelationDescription.md) | A list that describes the correlation of the service with other services. | [optional] 
**default_move_cost** | [**MoveCost**](MoveCost.md) |  | [optional] 
**placement_constraints** | **str** | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: \&quot;NodeColor &#x3D;&#x3D; blue)\&quot;. | [optional] 
**service_load_metrics** | [**List[ServiceLoadMetricDescription]**](ServiceLoadMetricDescription.md) | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | A list that describes the correlation of the service with other services. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_properties import StatefulServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceProperties from a JSON string
stateful_service_properties_instance = StatefulServiceProperties.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceProperties.to_json())

# convert the object into a dict
stateful_service_properties_dict = stateful_service_properties_instance.to_dict()
# create an instance of StatefulServiceProperties from a dict
stateful_service_properties_from_dict = StatefulServiceProperties.from_dict(stateful_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


