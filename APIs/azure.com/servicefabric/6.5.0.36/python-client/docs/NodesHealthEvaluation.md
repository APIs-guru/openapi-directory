# NodesHealthEvaluation

Represents health evaluation for nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_nodes** | **int** | Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy. | [optional] 
**total_count** | **int** | Total number of nodes found in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.nodes_health_evaluation import NodesHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of NodesHealthEvaluation from a JSON string
nodes_health_evaluation_instance = NodesHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(NodesHealthEvaluation.to_json())

# convert the object into a dict
nodes_health_evaluation_dict = nodes_health_evaluation_instance.to_dict()
# create an instance of NodesHealthEvaluation from a dict
nodes_health_evaluation_from_dict = NodesHealthEvaluation.from_dict(nodes_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


