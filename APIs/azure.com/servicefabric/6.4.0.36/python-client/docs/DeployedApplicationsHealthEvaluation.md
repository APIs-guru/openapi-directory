# DeployedApplicationsHealthEvaluation

Represents health evaluation for deployed applications, containing health evaluations for each unhealthy deployed application that impacted current aggregated health state. Can be returned when evaluating application health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_deployed_applications** | **int** | Maximum allowed percentage of unhealthy deployed applications from the ApplicationHealthPolicy. | [optional] 
**total_count** | **int** | Total number of deployed applications of the application in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.deployed_applications_health_evaluation import DeployedApplicationsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationsHealthEvaluation from a JSON string
deployed_applications_health_evaluation_instance = DeployedApplicationsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationsHealthEvaluation.to_json())

# convert the object into a dict
deployed_applications_health_evaluation_dict = deployed_applications_health_evaluation_instance.to_dict()
# create an instance of DeployedApplicationsHealthEvaluation from a dict
deployed_applications_health_evaluation_from_dict = DeployedApplicationsHealthEvaluation.from_dict(deployed_applications_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


