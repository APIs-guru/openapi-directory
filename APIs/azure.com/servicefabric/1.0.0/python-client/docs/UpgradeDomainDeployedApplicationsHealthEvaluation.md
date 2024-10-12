# UpgradeDomainDeployedApplicationsHealthEvaluation

The evaluation of the upgrade domain deployed applications health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_deployed_applications** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 
**upgrade_domain_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_domain_deployed_applications_health_evaluation import UpgradeDomainDeployedApplicationsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDomainDeployedApplicationsHealthEvaluation from a JSON string
upgrade_domain_deployed_applications_health_evaluation_instance = UpgradeDomainDeployedApplicationsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(UpgradeDomainDeployedApplicationsHealthEvaluation.to_json())

# convert the object into a dict
upgrade_domain_deployed_applications_health_evaluation_dict = upgrade_domain_deployed_applications_health_evaluation_instance.to_dict()
# create an instance of UpgradeDomainDeployedApplicationsHealthEvaluation from a dict
upgrade_domain_deployed_applications_health_evaluation_from_dict = UpgradeDomainDeployedApplicationsHealthEvaluation.from_dict(upgrade_domain_deployed_applications_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


