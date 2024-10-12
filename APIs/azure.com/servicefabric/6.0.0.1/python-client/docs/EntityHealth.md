# EntityHealth

Health information common to all entities in the cluster. It contains the aggregated health state, health events and unhealthy evaluation. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.entity_health import EntityHealth

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHealth from a JSON string
entity_health_instance = EntityHealth.from_json(json)
# print the JSON string representation of the object
print(EntityHealth.to_json())

# convert the object into a dict
entity_health_dict = entity_health_instance.to_dict()
# create an instance of EntityHealth from a dict
entity_health_from_dict = EntityHealth.from_dict(entity_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


