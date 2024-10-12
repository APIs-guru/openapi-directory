# NodeHealthState

Represents the health state of a node, which contains the node identifier and its aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**NodeId**](NodeId.md) |  | [optional] 
**name** | **str** | The name of a Service Fabric node. | [optional] 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_health_state import NodeHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthState from a JSON string
node_health_state_instance = NodeHealthState.from_json(json)
# print the JSON string representation of the object
print(NodeHealthState.to_json())

# convert the object into a dict
node_health_state_dict = node_health_state_instance.to_dict()
# create an instance of NodeHealthState from a dict
node_health_state_from_dict = NodeHealthState.from_dict(node_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


