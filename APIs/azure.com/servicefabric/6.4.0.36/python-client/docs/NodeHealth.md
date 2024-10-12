# NodeHealth

Information about the health of a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of a Service Fabric node. | [optional] 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.node_health import NodeHealth

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealth from a JSON string
node_health_instance = NodeHealth.from_json(json)
# print the JSON string representation of the object
print(NodeHealth.to_json())

# convert the object into a dict
node_health_dict = node_health_instance.to_dict()
# create an instance of NodeHealth from a dict
node_health_from_dict = NodeHealth.from_dict(node_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


