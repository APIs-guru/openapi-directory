# UpgradeDomainNodesHealthEvaluation

The evaluation of the upgrade domain nodes health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_nodes** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 
**upgrade_domain_name** | **str** |  | [optional] 

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


