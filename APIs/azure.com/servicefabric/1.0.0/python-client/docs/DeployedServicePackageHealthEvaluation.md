# DeployedServicePackageHealthEvaluation

The evaluation of the deployed service package health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health_evaluation import DeployedServicePackageHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealthEvaluation from a JSON string
deployed_service_package_health_evaluation_instance = DeployedServicePackageHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealthEvaluation.to_json())

# convert the object into a dict
deployed_service_package_health_evaluation_dict = deployed_service_package_health_evaluation_instance.to_dict()
# create an instance of DeployedServicePackageHealthEvaluation from a dict
deployed_service_package_health_evaluation_from_dict = DeployedServicePackageHealthEvaluation.from_dict(deployed_service_package_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


