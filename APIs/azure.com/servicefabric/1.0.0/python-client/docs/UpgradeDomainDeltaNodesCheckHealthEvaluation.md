# UpgradeDomainDeltaNodesCheckHealthEvaluation

The evaluation of the upgrade domain delta nodes check health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_error_count** | **int** |  | [optional] 
**baseline_total_count** | **int** |  | [optional] 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 
**upgrade_domain_name** | **str** |  | [optional] 

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


