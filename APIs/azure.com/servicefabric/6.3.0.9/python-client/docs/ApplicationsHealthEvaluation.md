# ApplicationsHealthEvaluation

Represents health evaluation for applications, containing health evaluations for each unhealthy application that impacted current aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_applications** | **int** | Maximum allowed percentage of unhealthy applications from the ClusterHealthPolicy. | [optional] 
**total_count** | **int** | Total number of applications from the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.applications_health_evaluation import ApplicationsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationsHealthEvaluation from a JSON string
applications_health_evaluation_instance = ApplicationsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ApplicationsHealthEvaluation.to_json())

# convert the object into a dict
applications_health_evaluation_dict = applications_health_evaluation_instance.to_dict()
# create an instance of ApplicationsHealthEvaluation from a dict
applications_health_evaluation_from_dict = ApplicationsHealthEvaluation.from_dict(applications_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


