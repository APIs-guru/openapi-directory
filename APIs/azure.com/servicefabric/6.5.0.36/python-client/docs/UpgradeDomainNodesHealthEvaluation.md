# UpgradeDomainNodesHealthEvaluation

Represents health evaluation for cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned when evaluating cluster health during cluster upgrade and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_nodes** | **int** | Maximum allowed percentage of unhealthy nodes from the ClusterHealthPolicy. | [optional] 
**total_count** | **int** | Total number of nodes in the current upgrade domain. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**upgrade_domain_name** | **str** | Name of the upgrade domain where nodes health is currently evaluated. | [optional] 

## Example

```python
from openapi_client.models.upgrade_domain_nodes_health_evaluation import UpgradeDomainNodesHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDomainNodesHealthEvaluation from a JSON string
upgrade_domain_nodes_health_evaluation_instance = UpgradeDomainNodesHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(UpgradeDomainNodesHealthEvaluation.to_json())

# convert the object into a dict
upgrade_domain_nodes_health_evaluation_dict = upgrade_domain_nodes_health_evaluation_instance.to_dict()
# create an instance of UpgradeDomainNodesHealthEvaluation from a dict
upgrade_domain_nodes_health_evaluation_from_dict = UpgradeDomainNodesHealthEvaluation.from_dict(upgrade_domain_nodes_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


