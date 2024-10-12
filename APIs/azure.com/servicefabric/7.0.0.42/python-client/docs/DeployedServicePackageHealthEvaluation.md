# DeployedServicePackageHealthEvaluation

Represents health evaluation for a deployed service package, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

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


