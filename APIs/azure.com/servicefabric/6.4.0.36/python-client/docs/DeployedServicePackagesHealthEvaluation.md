# DeployedServicePackagesHealthEvaluation

Represents health evaluation for deployed service packages, containing health evaluations for each unhealthy deployed service package that impacted current aggregated health state. Can be returned when evaluating deployed application health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** | Total number of deployed service packages of the deployed application in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_packages_health_evaluation import DeployedServicePackagesHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackagesHealthEvaluation from a JSON string
deployed_service_packages_health_evaluation_instance = DeployedServicePackagesHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackagesHealthEvaluation.to_json())

# convert the object into a dict
deployed_service_packages_health_evaluation_dict = deployed_service_packages_health_evaluation_instance.to_dict()
# create an instance of DeployedServicePackagesHealthEvaluation from a dict
deployed_service_packages_health_evaluation_from_dict = DeployedServicePackagesHealthEvaluation.from_dict(deployed_service_packages_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


