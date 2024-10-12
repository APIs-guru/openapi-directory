# StatelessServiceInstanceHealth

Represents the health of the stateless service instance. Contains the instance aggregated health state, the health events and the unhealthy evaluations. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**instance_id** | **str** | Id of a stateless service instance. InstanceId is used by Service Fabric to uniquely identify an instance of a partition of a stateless service. It is unique within a partition and does not change for the lifetime of the instance. If the instance has failed over on the same or different node, it will get a different value for the InstanceId. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_instance_health import StatelessServiceInstanceHealth

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceInstanceHealth from a JSON string
stateless_service_instance_health_instance = StatelessServiceInstanceHealth.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceInstanceHealth.to_json())

# convert the object into a dict
stateless_service_instance_health_dict = stateless_service_instance_health_instance.to_dict()
# create an instance of StatelessServiceInstanceHealth from a dict
stateless_service_instance_health_from_dict = StatelessServiceInstanceHealth.from_dict(stateless_service_instance_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


