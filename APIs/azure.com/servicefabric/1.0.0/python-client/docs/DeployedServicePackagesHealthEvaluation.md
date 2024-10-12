# DeployedServicePackagesHealthEvaluation

The evaluation of the deployed service packages health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


