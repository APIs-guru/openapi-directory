# UpgradeDomainDeltaNodesCheckHealthEvaluation

Represents health evaluation for delta unhealthy cluster nodes in an upgrade domain, containing health evaluations for each unhealthy node that impacted current aggregated health state. Can be returned during cluster upgrade when cluster aggregated health state is Warning or Error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_error_count** | **int** | Number of upgrade domain nodes with aggregated heath state Error in the health store at the beginning of the cluster upgrade. | [optional] 
**baseline_total_count** | **int** | Total number of upgrade domain nodes in the health store at the beginning of the cluster upgrade. | [optional] 
**max_percent_delta_unhealthy_nodes** | **int** | Maximum allowed percentage of upgrade domain delta unhealthy nodes from the ClusterUpgradeHealthPolicy. | [optional] 
**total_count** | **int** | Total number of upgrade domain nodes in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**upgrade_domain_name** | **str** | Name of the upgrade domain where nodes health is currently evaluated. | [optional] 

## Example

```python
from openapi_client.models.upgrade_domain_delta_nodes_check_health_evaluation import UpgradeDomainDeltaNodesCheckHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDomainDeltaNodesCheckHealthEvaluation from a JSON string
upgrade_domain_delta_nodes_check_health_evaluation_instance = UpgradeDomainDeltaNodesCheckHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(UpgradeDomainDeltaNodesCheckHealthEvaluation.to_json())

# convert the object into a dict
upgrade_domain_delta_nodes_check_health_evaluation_dict = upgrade_domain_delta_nodes_check_health_evaluation_instance.to_dict()
# create an instance of UpgradeDomainDeltaNodesCheckHealthEvaluation from a dict
upgrade_domain_delta_nodes_check_health_evaluation_from_dict = UpgradeDomainDeltaNodesCheckHealthEvaluation.from_dict(upgrade_domain_delta_nodes_check_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


