# ServiceHealthEvaluation

Represents health evaluation for a service, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.service_health_evaluation import ServiceHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthEvaluation from a JSON string
service_health_evaluation_instance = ServiceHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthEvaluation.to_json())

# convert the object into a dict
service_health_evaluation_dict = service_health_evaluation_instance.to_dict()
# create an instance of ServiceHealthEvaluation from a dict
service_health_evaluation_from_dict = ServiceHealthEvaluation.from_dict(service_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


