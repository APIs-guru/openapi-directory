# NodesHealthEvaluation

The evaluation of the nodes health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_nodes** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


