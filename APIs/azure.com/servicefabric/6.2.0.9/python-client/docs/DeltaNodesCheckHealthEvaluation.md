# DeltaNodesCheckHealthEvaluation

Represents health evaluation for delta nodes, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned during cluster upgrade when the aggregated health state of the cluster is Warning or Error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_error_count** | **int** | Number of nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade. | [optional] 
**baseline_total_count** | **int** | Total number of nodes in the health store at the beginning of the cluster upgrade. | [optional] 
**max_percent_delta_unhealthy_nodes** | **int** | Maximum allowed percentage of delta unhealthy nodes from the ClusterUpgradeHealthPolicy. | [optional] 
**total_count** | **int** | Total number of nodes in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

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


