# ServicesHealthEvaluation

Represents health evaluation for services of a certain service type belonging to an application, containing health evaluations for each unhealthy service that impacted current aggregated health state. Can be returned when evaluating application health and the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_services** | **int** | Maximum allowed percentage of unhealthy services from the ServiceTypeHealthPolicy. | [optional] 
**service_type_name** | **str** | Name of the service type of the services. | [optional] 
**total_count** | **int** | Total number of services of the current service type in the application from the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.services_health_evaluation import ServicesHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesHealthEvaluation from a JSON string
services_health_evaluation_instance = ServicesHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ServicesHealthEvaluation.to_json())

# convert the object into a dict
services_health_evaluation_dict = services_health_evaluation_instance.to_dict()
# create an instance of ServicesHealthEvaluation from a dict
services_health_evaluation_from_dict = ServicesHealthEvaluation.from_dict(services_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


