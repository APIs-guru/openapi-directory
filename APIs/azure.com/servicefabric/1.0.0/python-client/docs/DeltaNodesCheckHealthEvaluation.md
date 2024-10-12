# DeltaNodesCheckHealthEvaluation

The evaluation of the delta nodes check health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_error_count** | **int** |  | [optional] 
**baseline_total_count** | **int** |  | [optional] 
**max_percent_delta_unhealthy_nodes** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.delta_nodes_check_health_evaluation import DeltaNodesCheckHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of DeltaNodesCheckHealthEvaluation from a JSON string
delta_nodes_check_health_evaluation_instance = DeltaNodesCheckHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(DeltaNodesCheckHealthEvaluation.to_json())

# convert the object into a dict
delta_nodes_check_health_evaluation_dict = delta_nodes_check_health_evaluation_instance.to_dict()
# create an instance of DeltaNodesCheckHealthEvaluation from a dict
delta_nodes_check_health_evaluation_from_dict = DeltaNodesCheckHealthEvaluation.from_dict(delta_nodes_check_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


